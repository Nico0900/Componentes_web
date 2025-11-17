import { useState } from 'react';

export default function Modal10Example() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleComplete = () => {
    alert('Wizard completed!');
    setIsOpen(false);
    setCurrentStep(1);
  };

  return (
    <div className="flex justify-center items-center p-6 relative min-h-[400px]">
      {isOpen && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div
            className="absolute inset-0 bg-slate-950/10"
            
          />

          <div className="relative bg-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full border border-slate-700 animate-slideUp">
            <div className="px-6 py-4 border-b border-slate-700 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-100">Setup Wizard</h3>
              <button
                className="text-slate-400 hover:text-slate-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="px-6 py-6">
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center flex-1">
                    <div className="flex flex-col items-center flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                          step === currentStep
                            ? 'bg-purple-600 text-white'
                            : step < currentStep
                            ? 'bg-purple-600 text-white'
                            : 'bg-slate-700 text-slate-400'
                        }`}
                      >
                        {step < currentStep ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          step
                        )}
                      </div>
                      <span className="text-xs text-slate-400 mt-2">Step {step}</span>
                    </div>
                    {step < 3 && (
                      <div
                        className={`h-1 flex-1 mx-2 rounded transition-colors ${
                          step < currentStep ? 'bg-purple-600' : 'bg-slate-700'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="min-h-[200px]">
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-slate-100">Personal Information</h4>
                    <div>
                      <label className="block text-sm text-slate-400 mb-1">Full Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-slate-400 mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-slate-100">Preferences</h4>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-purple-600" defaultChecked />
                        <span className="text-slate-300">Enable notifications</span>
                      </label>
                      <label className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-purple-600" />
                        <span className="text-slate-300">Subscribe to newsletter</span>
                      </label>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-slate-100">Review & Confirm</h4>
                    <div className="bg-slate-700/30 rounded-lg p-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Name:</span>
                        <span className="text-slate-200">John Doe</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Email:</span>
                        <span className="text-slate-200">john@example.com</span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm">
                      Please review your information and click Complete.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="px-6 py-4 border-t border-slate-700 flex justify-between">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {currentStep < 3 ? (
                <button
                  onClick={nextStep}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleComplete}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                >
                  Complete
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export const modal10Code = `import { useState } from 'react';

export default function Modal10Example() {
  const [isOpen, setIsOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => { if (currentStep < 3) setCurrentStep(currentStep + 1); };
  const prevStep = () => { if (currentStep > 1) setCurrentStep(currentStep - 1); };
  const handleComplete = () => { alert('Completed!'); setIsOpen(false); setCurrentStep(1); };

  return (
    <div className="flex justify-center items-center p-6 relative min-h-[400px]">
      {isOpen && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/80"  />
          <div className="relative bg-slate-800 rounded-2xl max-w-2xl w-full border border-slate-700">
            <h3 className="px-6 py-4 text-xl font-bold text-slate-100 border-b border-slate-700">Setup Wizard</h3>
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((step) => (
                  <div key={step} className={\`w-10 h-10 rounded-full flex items-center justify-center \${step <= currentStep ? 'bg-purple-600 text-white' : 'bg-slate-700 text-slate-400'}\`}>
                    {step}
                  </div>
                ))}
              </div>
              <div className="min-h-[200px]">
                {currentStep === 1 && <div><h4 className="text-lg text-slate-100 mb-4">Personal Info</h4><input type="text" className="w-full px-4 py-2 bg-slate-700 rounded-lg text-slate-100" placeholder="Name" /></div>}
                {currentStep === 2 && <div><h4 className="text-lg text-slate-100 mb-4">Preferences</h4><label><input type="checkbox" /> Enable notifications</label></div>}
                {currentStep === 3 && <div><h4 className="text-lg text-slate-100 mb-4">Review</h4><p className="text-slate-400">Review and complete setup.</p></div>}
              </div>
            </div>
            <div className="px-6 py-4 border-t border-slate-700 flex justify-between">
              <button onClick={prevStep} disabled={currentStep === 1} className="px-4 py-2 bg-slate-700 text-slate-200 rounded-lg">Previous</button>
              {currentStep < 3 ? <button onClick={nextStep} className="px-4 py-2 bg-purple-600 text-white rounded-lg">Next</button> : <button onClick={handleComplete} className="px-4 py-2 bg-purple-600 text-white rounded-lg">Complete</button>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}`;
