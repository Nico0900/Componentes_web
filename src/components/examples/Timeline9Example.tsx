import { useState } from 'react';

export default function Timeline9Example() {
  const [currentStep, setCurrentStep] = useState(2);

  const steps = [
    { id: 1, title: 'Account Setup', description: 'Create your profile' },
    { id: 2, title: 'Verify Email', description: 'Check your inbox' },
    { id: 3, title: 'Add Information', description: 'Complete your details' },
    { id: 4, title: 'Start Using', description: 'Explore the platform' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-8 left-0 right-0 h-1 bg-slate-700/50" />
        <div
          className="absolute top-8 left-0 h-1 bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />

        {/* Steps */}
        <div className="flex justify-between relative">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center" style={{ width: `${100 / steps.length}%` }}>
              {/* Step Marker */}
              <button
                onClick={() => setCurrentStep(step.id)}
                className={`w-16 h-16 rounded-full border-4 border-slate-900 flex items-center justify-center text-xl font-bold transition-all duration-300 mb-4 ${
                  step.id <= currentStep
                    ? 'bg-gradient-to-br from-red-500 to-pink-500 text-white shadow-lg'
                    : 'bg-slate-800 text-slate-500'
                }`}
              >
                {step.id}
              </button>

              {/* Step Content */}
              <div className="text-center">
                <h3 className={`text-base font-semibold mb-1 ${step.id <= currentStep ? 'text-slate-200' : 'text-slate-500'}`}>
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Info */}
        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm">
            Step <span className="text-red-400 font-semibold">{currentStep}</span> of {steps.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export const timeline9Code = `import { useState } from 'react';

export default function Timeline9Example() {
  const [currentStep, setCurrentStep] = useState(2);

  const steps = [
    { id: 1, title: 'Account Setup', description: 'Create your profile' },
    { id: 2, title: 'Verify Email', description: 'Check your inbox' },
    { id: 3, title: 'Add Information', description: 'Complete your details' },
    { id: 4, title: 'Start Using', description: 'Explore the platform' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-8 left-0 right-0 h-1 bg-slate-700/50" />
        <div
          className="absolute top-8 left-0 h-1 bg-gradient-to-r from-red-500 to-pink-500 transition-all duration-500"
          style={{ width: \`\${((currentStep - 1) / (steps.length - 1)) * 100}%\` }}
        />

        {/* Steps */}
        <div className="flex justify-between relative">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center" style={{ width: \`\${100 / steps.length}%\` }}>
              {/* Step Marker */}
              <button
                onClick={() => setCurrentStep(step.id)}
                className={\`w-16 h-16 rounded-full border-4 border-slate-900 flex items-center justify-center text-xl font-bold transition-all duration-300 mb-4 \${
                  step.id <= currentStep
                    ? 'bg-gradient-to-br from-red-500 to-pink-500 text-white shadow-lg'
                    : 'bg-slate-800 text-slate-500'
                }\`}
              >
                {step.id}
              </button>

              {/* Step Content */}
              <div className="text-center">
                <h3 className={\`text-base font-semibold mb-1 \${step.id <= currentStep ? 'text-slate-200' : 'text-slate-500'}\`}>
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Info */}
        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm">
            Step <span className="text-red-400 font-semibold">{currentStep}</span> of {steps.length}
          </p>
        </div>
      </div>
    </div>
  );
}`;
