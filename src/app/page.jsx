import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { CheckCircle, MessageSquare, BarChart2, Users, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-emerald-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Send Bulk SMS Messages <span className="text-emerald-600">Effortlessly</span>
            </h1>
            <p className="text-md text-gray-600 max-w-3xl mx-auto mb-10">
              Reach thousands of customers instantly with our reliable bulk SMS platform. Perfect for marketing campaigns, alerts, and notifications.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="bg-white" />
              <Button className="bg-emerald-600 hover:bg-emerald-700 whitespace-nowrap">
                Get Started
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
              <CheckCircle className="h-4 w-4 text-emerald-600" />
              <span>No credit card required</span>
              <span>•</span>
              <span>Free trial available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-md text-gray-600 max-w-2xl mx-auto">
              Everything you need to run successful SMS campaigns
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-emerald-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <feature.icon className="h-5 w-5 text-emerald-600" />
                  </div>
                  <CardTitle className="text-l">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-4">WHY MAS3NDI?</h2>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            Our unwavering commitment to delivering unmatched services and extraordinary customer experiences sets us apart.Here are numerous compelling motivations to choose our services:
          </p>
        </div>
        <div className="max-w-7xl mx-auto space-y-20">
          {services.map((product, idx) => (
            <div
              key={product.id}
              className={`flex flex-col items-center gap-8 md:items-start md:flex-row lg:items-start lg:flex-row ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } ${
                idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`
              }
            >
              <div className="relative w-full lg:w-1/2 h-80">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-6">Ready to boost your communication?</h2>
          <p className="text-md mb-8 opacity-90">
            Join thousands of businesses already using Mas3ndi to connect with their customers.
          </p>
          <Button variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-6 text-md">
            Start Your Free Trial
          </Button>
        </div>
      </section>

    </div>
  );
}

const features = [
  {
    icon: BarChart2,
    title: "Real-time Analytics",
    description: "Track delivery rates, opens, and responses in real-time to measure campaign success."
  },
  {
    icon: Users,
    title: "Contact Management",
    description: "Organize contacts into groups and segments for targeted messaging campaigns."
  },
  {
    icon: Zap,
    title: "High Speed Delivery",
    description: "Our infrastructure ensures your messages are delivered in seconds, not hours."
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and 99.9% uptime guarantee for your peace of mind."
  },
  {
    icon: MessageSquare,
    title: "Two-way Messaging",
    description: "Enable replies and engage in conversations with your customers directly."
  },
  {
    icon: CheckCircle,
    title: "Scheduled Sending",
    description: "Plan your campaigns in advance with our intuitive scheduling system."
  }
];

const services = [
  {
    id: 1,
    name: 'Expertise and Experience',
    description: 'With years of industry experience and a team of seasoned professionals, we bring expertise and insights that drive results.',
    image: '/assets/images/sms5.jpeg',
  },
  {
    id: 2,
    name: 'Customer-Approach',
    description: 'Your needs are our top priority. Recognizing your needs, we customize our solutions to align precisely with your unique objectives and preferences.',
    image: '/assets/images/sms6.jpeg',
  },
  {
    id: 3,
    name: 'Communication',
    description: "Our dedication to transparent communication ensures that you're consistently informed and engaged at every stage, fostering clarity and trust throughout the process.",
    image: '/assets/images/sms7.jpeg',
  },
  {
    id: 4,
    name: 'Customer Satisfaction',
    description: 'Customer satisfaction is our ultimate goal. We surpass expectations to ensure your utmost satisfaction with both our services and the overall experience of partnering with us.',
    image: '/assets/images/sms4.png',
  },
  {
    id: 5,
    name: 'Quality Assurance',
    description: 'We prioritize quality in everything we do. From product sourcing to service delivery, we uphold the highest standards to ensure your satisfaction.',
    image: '/assets/images/sms3.webp',
  },
  {
    id: 6,
    name: 'Competitive Pricing',
    description: 'We offer competitive pricing without compromising on quality. Experience value-driven solutions designed to optimize your return on investment while minimizing expenditure, ensuring maximum cost-effectiveness.',
    image: '/assets/images/sms1.avif',
  },
];
