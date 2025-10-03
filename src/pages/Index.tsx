import { Sparkles, Zap, Shield, MessageSquare } from "lucide-react";
import ChatInterface from "@/components/ChatInterface";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Powered by Advanced AI</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Gideon AI
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Your intelligent assistant for instant answers, creative solutions, and seamless conversations
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Natural Conversations</h3>
              <p className="text-muted-foreground text-sm">
                Chat naturally with AI that understands context and provides relevant responses
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground text-sm">
                Get instant responses powered by cutting-edge AI technology
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Reliable & Secure</h3>
              <p className="text-muted-foreground text-sm">
                Your conversations are processed securely with enterprise-grade infrastructure
              </p>
            </div>
          </div>

          {/* Chat Interface */}
          <ChatInterface />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4 mt-20">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>© 2025 Gideon AI. Powered by advanced language models.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;