import { getDepartments, getDoctors } from "../dashboard/api.js";

/* 🔹 In-memory cache */
let cachedDepartments = null;
let cachedDoctors = null;
let lastFetched = 0;

/* 🔹 Fetch once (or refresh every 5 minutes) */
async function loadData() {
    const now = Date.now();

    if (!cachedDepartments || !cachedDoctors || now - lastFetched > 5 * 60 * 1000) {
        const [departments, doctors] = await Promise.all([
            getDepartments(),
            getDoctors()
        ]);

        cachedDepartments = departments;
        cachedDoctors = doctors;
        lastFetched = now;
    }

    return { departments: cachedDepartments, doctors: cachedDoctors };
}

function normalize(text) {
    return text.toLowerCase().replace(/[^a-z\s]/g, "").trim();
}

export async function getBotReply(message) {
    const msg = normalize(message);

    /* ⚡ FAST: cached data */
    const { departments, doctors } = await loadData();

    // Greeting
    if (["hi", "hello", "hey"].includes(msg)) {
        return {
            text:
                "Hello. How can I help you today?\n\n" +
                "You can ask about:\n" +
                "Departments\nDoctors\nSkin issue\nHeart problem\nChild doctor"
        };
    }

    // Departments
    if (msg.includes("department")) {
        return {
            type: "departments",
            title: "Departments at Mallika Hospital",
            departments
        };
    }

    // Doctors
    if (msg === "doctor" || msg === "doctors") {
        return {
            doctors
        };
    }

    // Direct department name
    const dept = departments.find(d =>
        d.name.toLowerCase().includes(msg) || msg.includes(d.name.toLowerCase())
    );

    if (dept) {
        return {
            text: `Doctors available in ${dept.name}:`,
            doctors: doctors.filter(doc => doc.department === dept.id)
        };
    }

    // Problem → department mapping
    const mappings = [
        // Skin
        {
            keys: ["skin", "rash", "itch", "pimple", "acne", "allergy"],
            match: "dermat"
        },

        // Heart
        {
            keys: ["heart", "bp", "blood pressure", "chest pain", "cardiac"],
            match: "cardio"
        },

        // Child
        {
            keys: ["child", "baby", "kid", "pediatric"],
            match: "paediatric"
        },

        // Bone & joints
        {
            keys: ["bone", "joint", "knee", "back pain", "fracture"],
            match: "ortho"
        },

        // Women / pregnancy
        {
            keys: ["pregnancy", "period", "women", "gynae", "pcos"],
            match: "gynaeco"
        },

        // Stomach / digestion
        {
            keys: ["stomach", "gas", "acidity", "digestion", "loose motion"],
            match: "gastro"
        },

        // Brain / nerves
        {
            keys: ["headache", "migraine", "brain", "seizure", "fits"],
            match: "neuro"
        },

        // ENT
        {
            keys: ["ear pain", "throat", "nose", "sinus", "tonsil"],
            match: "ent"
        },

        // Chest / lungs
        {
            keys: ["cough", "breathing", "asthma", "lungs"],
            match: "chest"
        },

        // Kidney
        {
            keys: ["kidney", "dialysis", "urine infection"],
            match: "nephro"
        },

        // Urine / prostate
        {
            keys: ["urine", "urinary", "prostate", "bladder"],
            match: "uro"
        },

        // Blood
        {
            keys: ["blood", "anemia", "low hb"],
            match: "hema"
        },

        // Cancer
        {
            keys: ["cancer", "tumor", "chemo"],
            match: "onco"
        },

        // Plastic surgery
        {
            keys: ["cosmetic", "scar", "plastic surgery"],
            match: "plastic"
        },

        // Vascular
        {
            keys: ["vein", "varicose", "vascular"],
            match: "vascular"
        },

        // General physician
        {
            keys: ["fever", "cold", "diabetes", "bp check"],
            match: "medicine"
        }
    ];

    for (const map of mappings) {
        if (map.keys.some(k => msg.includes(k))) {
            const d = departments.find(dep =>
                dep.name.toLowerCase().includes(map.match)
            );
            if (!d) break;

            return {
                text: `Doctors available in ${d.name}:`,
                doctors: doctors.filter(doc => doc.department === d.id)
            };
        }
    }

    // Fallback
    return {
        text:
            "I can help you find the right doctor.\n\n" +
            "Try typing:\n" +
            "Departments\nDoctors\nSkin issue\nHeart problem\nChild doctor"
    };
}
