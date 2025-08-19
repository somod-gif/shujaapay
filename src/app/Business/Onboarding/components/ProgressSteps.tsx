import { steps } from "../page";
import { Check } from "lucide-react";

export const ProgressSteps = ({
  currentStep,
}: {
  currentStep: number;
}) => (
  <div className="bg-gradient-to-br from-slate-50/80 to-white/60 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-6 lg:py-8 border-b border-slate-200/60">
    {/* Desktop Layout */}
    <div className="hidden lg:block">
      <div className="flex justify-between items-center mb-8 relative">
        {/* Connection Lines */}
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-slate-200 -z-10" />
        <div
          className="absolute top-6 left-0 h-0.5 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 -z-10 transition-all duration-700 ease-out"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        />
        
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="flex flex-col items-center relative z-10 group"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 transform ${
                currentStep >= step.number
                  ? "bg-gradient-to-br from-violet-500 to-blue-600 text-white shadow-xl shadow-blue-500/30 scale-110 ring-4 ring-blue-100"
                  : currentStep === step.number - 1
                  ? "bg-white border-2 border-blue-400 text-blue-600 shadow-lg scale-105 animate-pulse"
                  : "bg-white border-2 border-slate-300 text-slate-400 shadow-sm hover:border-slate-400 hover:scale-105"
              }`}
            >
              {currentStep > step.number ? (
                <Check className="w-5 h-5" />
              ) : (
                <span className="font-semibold">{step.number}</span>
              )}
            </div>
            <div
              className={`text-sm font-semibold mt-3 transition-all duration-300 text-center max-w-28 ${
                currentStep >= step.number
                  ? "text-violet-700"
                  : currentStep === step.number - 1
                  ? "text-blue-600"
                  : "text-slate-500 group-hover:text-slate-700"
              }`}
            >
              {step.title}
            </div>
            <div
              className={`text-xs mt-1 transition-all duration-300 text-center max-w-28 leading-relaxed ${
                currentStep >= step.number
                  ? "text-violet-600"
                  : currentStep === step.number - 1
                  ? "text-blue-500"
                  : "text-slate-400"
              }`}
            >
              {step.description}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Mobile Layout */}
    <div className="lg:hidden">
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.number} className="relative">
            {/* Vertical connector line */}
            {index < steps.length - 1 && (
              <div className="absolute left-6 top-12 w-0.5 h-8 bg-slate-200" />
            )}
            {index < steps.length - 1 && currentStep > step.number && (
              <div className="absolute left-6 top-12 w-0.5 h-8 bg-gradient-to-b from-violet-500 to-blue-500 transition-all duration-500" />
            )}
            
            <div className="flex items-start space-x-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 flex-shrink-0 ${
                  currentStep >= step.number
                    ? "bg-gradient-to-br from-violet-500 to-blue-600 text-white shadow-xl shadow-blue-500/20 ring-4 ring-blue-100"
                    : currentStep === step.number - 1
                    ? "bg-white border-2 border-blue-400 text-blue-600 shadow-lg animate-pulse"
                    : "bg-white border-2 border-slate-300 text-slate-400 shadow-sm"
                }`}
              >
                {currentStep > step.number ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span className="font-semibold">{step.number}</span>
                )}
              </div>
              
              <div className="flex-1 pt-1">
                <div
                  className={`text-base font-semibold transition-all duration-300 ${
                    currentStep >= step.number
                      ? "text-violet-700"
                      : currentStep === step.number - 1
                      ? "text-blue-600"
                      : "text-slate-500"
                  }`}
                >
                  {step.title}
                </div>
                <div
                  className={`text-sm mt-1 transition-all duration-300 leading-relaxed ${
                    currentStep >= step.number
                      ? "text-violet-600"
                      : currentStep === step.number - 1
                      ? "text-blue-500"
                      : "text-slate-400"
                  }`}
                >
                  {step.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Progress Bar */}
    <div className="mt-8 lg:mt-6">
      <div className="flex justify-between text-xs text-slate-500 mb-2">
        <span>Progress</span>
        <span>{Math.round(((currentStep - 1) / (steps.length - 1)) * 100)}% Complete</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden shadow-inner">
        <div
          className="bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-700 ease-out relative overflow-hidden"
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        >
          {/* Animated shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  </div>
);