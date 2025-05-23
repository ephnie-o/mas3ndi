import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ShieldCheck, MessageSquare, BarChart2, UserPlus, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Hero Section */}
      <section className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center py-20 gap-12">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold text-green-800">
            Powerful Bulk SMS & OTP Services
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Utilize our robust platform for sending bulk SMS messages and secure one-time passwords with ease.
          </p>
          <Button className="mt-8 bg-green-800 hover:bg-green-600 text-white py-3 px-6 rounded-lg">
            Get Started
          </Button>
        </div>
        <div className="w-full lg:w-1/2 relative z-10 h-80">
          <Image
            src="/assets/images/sms.jpeg"
            alt="SMS & OTP illustration"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-green-800">Features</h2>
          <p className="mt-2 text-gray-600">Discover the benefits of using our platform</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex items-start bg-white border border-gray-200 rounded-xl p-6 space-x-4"
                >
                  <Icon className="w-24 h-24 text-green-800 flex-shrink-0" />
                  <div className="text-left">
                    <h3 className="text-xl font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

const features = [
  {
    title: 'Bulk SMS',
    description: 'Send large volumes of SMS messages quickly and reliably.',
    icon: MessageSquare,
  },
  {
    title: 'OTP Delivery',
    description: 'Securely deliver one-time passwords for user authentication.',
    icon: ShieldCheck,
  },
  {
    title: 'Contact Management',
    description: 'Organize and manage your contacts efficiently.',
    icon: UserPlus,
  },
  {
    title: 'Reporting & Analytics',
    description: 'Gain insights with detailed reporting and analytics.',
    icon: BarChart2,
  },
];
