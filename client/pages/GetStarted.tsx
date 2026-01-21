import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";

type OnboardingStep = 
  | "welcome"
  | "business"
  | "location"
  | "whatsapp"
  | "verify"
  | "completed";

export default function GetStarted() {
  const [step, setStep] = useState<OnboardingStep>("welcome");
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    country: "",
    currency: "",
    whatsappNumber: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    const steps: OnboardingStep[] = ["welcome", "business", "location", "whatsapp", "verify", "completed"];
    const currentIndex = steps.indexOf(step);
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const steps: OnboardingStep[] = ["welcome", "business", "location", "whatsapp", "verify", "completed"];
    const currentIndex = steps.indexOf(step);
    if (currentIndex > 0) {
      setStep(steps[currentIndex - 1]);
    }
  };

  const getStepNumber = () => {
    const steps: Record<OnboardingStep, number> = {
      welcome: 0,
      business: 1,
      location: 2,
      whatsapp: 3,
      verify: 4,
      completed: 5
    };
    return steps[step];
  };

  const stepNumber = getStepNumber();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Progress indicator */}
      {step !== "completed" && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-border">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(stepNumber / 5) * 100}%` }}
          />
        </div>
      )}

      <div className="w-full max-w-md">
        {step === "welcome" && (
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
            <div className="mb-6">
              <div className="flex gap-2 mb-4">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <div className="w-2 h-2 bg-secondary rounded-full" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Welcome to Closer</h2>
              <p className="text-muted-foreground text-sm">
                Let's get your business details set up so we can personalize your experience.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Business Details</div>
                  <p className="text-xs text-muted-foreground">Tell us about your business</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-xs font-bold">2</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Location & Currency</div>
                  <p className="text-xs text-muted-foreground">Choose your region</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-xs font-bold">3</span>
                </div>
                <div>
                  <div className="font-semibold text-sm">Connect WhatsApp</div>
                  <p className="text-xs text-muted-foreground">Sync your business account</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleNext}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Let's Get Started
            </Button>
          </div>
        )}

        {step === "business" && (
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
            <div className="mb-6">
              <div className="flex gap-2 mb-4">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <div className="w-2 h-2 bg-secondary rounded-full" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Business Details</h2>
              <p className="text-muted-foreground text-sm">
                Help us understand your business better
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Business Name</label>
                <Input 
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="Enter your business name"
                  className="bg-secondary/30 border-border"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <Input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="bg-secondary/30 border-border"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={handleBack}
                variant="outline"
                className="flex-1"
              >
                Back
              </Button>
              <Button 
                onClick={handleNext}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === "location" && (
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
            <div className="mb-6">
              <div className="flex gap-2 mb-4">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div className="w-2 h-2 bg-secondary rounded-full" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Location & Currency</h2>
              <p className="text-muted-foreground text-sm">
                Choose your location and preferred currency
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Country</label>
                <select 
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-secondary/30 text-foreground"
                >
                  <option value="">Select a country</option>
                  <option value="NG">Nigeria</option>
                  <option value="KE">Kenya</option>
                  <option value="ZA">South Africa</option>
                  <option value="GH">Ghana</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Currency</label>
                <select 
                  name="currency"
                  value={formData.currency}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-secondary/30 text-foreground"
                >
                  <option value="">Select currency</option>
                  <option value="NGN">Nigerian Naira (₦)</option>
                  <option value="KES">Kenyan Shilling (Sh)</option>
                  <option value="ZAR">South African Rand (R)</option>
                  <option value="GHS">Ghanaian Cedi (₵)</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={handleBack}
                variant="outline"
                className="flex-1"
              >
                Back
              </Button>
              <Button 
                onClick={handleNext}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === "whatsapp" && (
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
            <div className="mb-6">
              <div className="flex gap-2 mb-4">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div className="w-2 h-2 bg-primary rounded-full" />
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">Connect WhatsApp</h2>
              <p className="text-muted-foreground text-sm">
                Connect your WhatsApp Business account to start selling
              </p>
            </div>

            <div className="mb-6 p-4 bg-secondary/20 rounded-lg border border-secondary">
              <p className="text-sm text-muted-foreground">
                We'll help you connect your WhatsApp Business account to Closer so you can manage all conversations in one place.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2">WhatsApp Number</label>
                <Input 
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleInputChange}
                  placeholder="+234 800 123 4567"
                  className="bg-secondary/30 border-border"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={handleBack}
                variant="outline"
                className="flex-1"
              >
                Back
              </Button>
              <Button 
                onClick={handleNext}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === "verify" && (
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
            <div className="mb-6">
              <div className="flex gap-2 mb-4">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div className="w-2 h-2 bg-primary rounded-full" />
                <div className="w-2 h-2 bg-primary rounded-full" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Verify WhatsApp</h2>
              <p className="text-muted-foreground text-sm">
                We sent a verification code to your WhatsApp
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Verification Code</label>
                <Input 
                  placeholder="Enter 6-digit code"
                  className="bg-secondary/30 border-border text-center text-2xl tracking-widest"
                />
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Didn't receive the code? <a href="#" className="text-primary hover:underline">Resend</a>
              </p>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={handleBack}
                variant="outline"
                className="flex-1"
              >
                Back
              </Button>
              <Button 
                onClick={handleNext}
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Verify
              </Button>
            </div>
          </div>
        )}

        {step === "completed" && (
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-border text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-3xl">✓</div>
              </div>
              <h2 className="text-2xl font-bold mb-2">All Set!</h2>
              <p className="text-muted-foreground text-sm">
                Your account is ready to go. Start closing more sales today.
              </p>
            </div>

            <div className="space-y-3 mb-8 text-left">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs">✓</span>
                </div>
                <span className="text-sm">{formData.businessName || "Business"} set up</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs">✓</span>
                </div>
                <span className="text-sm">Location & currency configured</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs">✓</span>
                </div>
                <span className="text-sm">WhatsApp verified</span>
              </div>
            </div>

            <Link to="/dashboard" className="w-full">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Go to Dashboard
              </Button>
            </Link>
            <Link to="/" className="w-full mt-3">
              <Button variant="outline" className="w-full">
                Back Home
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
