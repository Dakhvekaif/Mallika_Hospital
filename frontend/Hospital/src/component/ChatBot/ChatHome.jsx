export default function ChatHome({ onSelect }) {
    const primaryActions = [
        { label: "Find a Doctor", value: "doctor", icon: "👨‍⚕️" },
        { label: "Our Specialities", value: "specialities", icon: "🏥" },
    ];

    const symptomActions = [
        { label: "Heart / Chest Pain", value: "heart" },
        { label: "Skin Issues / Burns", value: "skin" },
        { label: "Child Specialist", value: "child" },
        { label: "Bone / Joint Pain", value: "bone" }
    ];

    return (
        <div className="p-5 space-y-6 animate-fade-in">
            {/* Greeting Section */}
            <div className="text-center space-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">👋</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Welcome to Mallika</h2>
                <p className="text-sm text-gray-500 max-w-[250px] mx-auto">
                    I'm your virtual assistant. How can I help you find the right care today?
                </p>
            </div>

            {/* Primary Actions (Big Buttons) */}
            <div className="grid grid-cols-2 gap-3">
                {primaryActions.map(a => (
                    <button
                        key={a.value}
                        onClick={() => onSelect(a.value)}
                        className="bg-white border border-blue-100 hover:border-blue-500 hover:shadow-md hover:bg-blue-50 transition-all duration-200 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 group"
                    >
                        <span className="text-2xl group-hover:scale-110 transition-transform">{a.icon}</span>
                        <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-700">
                            {a.label}
                        </span>
                    </button>
                ))}
            </div>

            {/* Common Symptoms (Pill Badges) */}
            <div className="space-y-3">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider pl-1">
                    Quick Search by Symptom
                </p>
                <div className="flex flex-wrap gap-2">
                    {symptomActions.map(a => (
                        <button
                            key={a.value}
                            onClick={() => onSelect(a.value)}
                            className="bg-gray-50 border border-gray-200 text-gray-600 text-xs font-medium px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                        >
                            {a.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}