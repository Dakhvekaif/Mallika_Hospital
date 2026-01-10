export default function ChatHome({ onSelect }) {
    const actions = [
        { label: "Find a Doctor", value: "doctor", icon: "🧑‍⚕️" },
        { label: "Departments", value: "departments", icon: "🏥" },
        { label: "Heart Problem", value: "heart", icon: "❤️" },
        { label: "Skin Issue", value: "skin", icon: "🩺" },
        { label: "Child Specialist", value: "child", icon: "👶" },
        { label: "Bone / Joint Pain", value: "bone", icon: "🦴" }
    ];

    return (
        <div className="p-4 space-y-4">
            <div>
                <h2 className="text-lg font-semibold">Welcome to Mallika Hospital</h2>
                <p className="text-sm text-gray-500">
                    How can we help you today?
                </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
                {actions.map(a => (
                    <button
                        key={a.value}
                        onClick={() => onSelect(a.value)}
                        className="
              bg-white border rounded-xl p-4 shadow-sm
              flex flex-col items-center justify-center gap-2
              hover:bg-blue-50 transition
            "
                    >
                        <span className="text-2xl">{a.icon}</span>
                        <span className="text-sm font-medium text-center">
                            {a.label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
