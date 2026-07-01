import { Mail, ArrowRight, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ScrollView } from "./scroll-view";

export default function ContactSection() {
  return (
    <section className="py-16 md:py-32" id="contact">
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Header Section */}
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <ScrollView>
            <h2 className="text-4xl font-medium tracking-tight lg:text-5xl">
              Let's build something together.
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm always open to discussing product design work, embedded systems projects, or partnership opportunities. Feel free to reach out.
            </p>
          </ScrollView>
        </div>

        {/* Action Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          
          {/* Email Card */}
          <ScrollView delay={0.3}>
            <Card className="group relative overflow-hidden h-full p-8 transition-all hover:shadow-lg hover:border-primary/50">
              <div className="flex flex-col h-full justify-between gap-8">
                <div className="space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="size-6" />
                  </div>
                  <h3 className="text-2xl font-semibold">Drop an Email</h3>
                  <p className="text-muted-foreground">
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                  </p>
                </div>
                
                
                <Link 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=fariqfirmansyah1905@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    fariqfirmansyah1905@gmail.com
                  </Button>
                </Link>
              </div>
            </Card>
          </ScrollView>

          <ScrollView delay={0.4}>
            <Card className="group relative overflow-hidden h-full p-8 transition-all hover:shadow-lg hover:border-primary/50">
              <div className="flex flex-col h-full justify-between gap-8">
                <div className="space-y-4">

                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Instagram className="size-6" />
                  </div>
                  <h3 className="text-2xl font-semibold">Connect Globally</h3>
                  <p className="text-muted-foreground">
                    Let's connect! You can find more about my professional journey and projects on my social networks.
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <Link href="https://www.instagram.com/fariqfirmansyah_/" target="_blank" className="flex-1">
                    <Button className="w-full flex items-center justify-center gap-2">
                      Instagram <ArrowRight className="size-4" />
                    </Button>
                  </Link>
                  
                  <Link href="https://github.com/fvrIq" target="_blank">
                     <Button variant="secondary" size="icon" aria-label="GitHub">
                        <Github className="size-5" />
                     </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </ScrollView>

        </div>
      </div>
    </section>
  );
}