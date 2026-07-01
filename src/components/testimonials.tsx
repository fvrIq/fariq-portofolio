import { Card, CardContent } from "@/components/ui/card";
import { ScrollView } from "./scroll-view";

const journeyData = [
  {
    id: 1,
    year: "2023",
    title: "It Started with Curiosity",
    description:
      "I was fascinated by how hardware and software could work together. What began as classroom learning quickly turned into late nights experimenting with microcontrollers, embedded systems, and IoT projects just to see what I could build.",
  },
  {
    id: 2,
    year: "2024",
    title: "Learning by Building",
    description:
      "Instead of only studying concepts, I started turning ideas into working prototypes. Projects like the Smart Door Lock and ESP32-CAM Attendance System taught me that the best lessons come from debugging, testing, failing, and trying again.",
  },
  {
    id: 3,
    year: "2025",
    title: "Exploring AI",
    description:
      "Curiosity led me into Artificial Intelligence. Through a Computer Vision project for detecting high-beam headlights at night, I discovered how software could interpret and understand the world beyond traditional programming.",
  },
  {
    id: 4,
    year: "2026",
    title: "Building with Purpose",
    description:
      "My capstone project, a Smart Brooder System for KUB chickens, represents everything I've learned so far. It's where AI, IoT, embedded systems, and telecommunication engineering come together to solve a practical problem with meaningful impact.",
  },
];

export default function JourneySection() {
  return (
    <section className="py-16 md:py-32" id="journey">
      <div className="mx-auto max-w-4xl space-y-12 px-6 md:space-y-20">
        
        {/* Header Section */}
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <ScrollView>
            <h2 className="text-4xl font-medium tracking-tight lg:text-5xl">
              Building, Learning, Growing.
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I didn't become interested in engineering overnight. Every year brought new challenges, new skills, and a different way of thinking. This journey is still unfolding—but every project has brought me one step closer to the engineer I want to become.
            </p>
          </ScrollView>
        </div>

        {/* Timeline Section */}
        {/* HAPUS border-l di container ini */}
        <div className="relative ml-4 space-y-10 md:ml-6">
          {journeyData.map((item, index) => (
            <div key={item.id} className="relative pl-8 md:pl-12">
              
              {/* Garis Penghubung Vertikal (Hanya tampil jika BUKAN item terakhir) */}
              {index !== journeyData.length - 1 && (
                <div className="absolute left-0 top-2 bottom-[-3rem] w-px bg-muted-foreground/20" />
              )}

              {/* Timeline Dot Indicator */}
              {/* Posisi left disesuaikan (-left-[7.5px]) agar center persis dengan garis 1px di atas */}
              <div className="absolute -left-[7.5px] top-1.5 z-10 h-4 w-4 rounded-full bg-[#B89855] ring-4 ring-background" />

              <ScrollView delay={0.2 + index * 0.1}>
                <Card className="relative overflow-hidden transition-all hover:shadow-md">
                  <CardContent className="space-y-4 p-6 md:p-8">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-xl font-semibold tracking-tight text-[#D4AF37]">
                        {item.title}
                      </h3>
                      <span className="text-muted-foreground w-fit rounded-full bg-muted/50 px-3 py-1 text-xs font-medium">
                        {item.year}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollView>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}