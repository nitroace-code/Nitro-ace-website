import { Calendar, MapPin, Clock, ChevronRight } from "lucide-react";

export function Events() {
  const upcomingEvents = [
    {
      title: "MORPHINE MOTORSPORT SERIES SEASON 2",
      date: "Oct 1, 2026",
      location: "Hyderabad",
      time: "8:00 - 18:00",
      type: "Competition",
      description: "Get ready for the next chapter! MORPHINE Motorsport Series Season 2 is coming soon. Stay tuned for more details.",
    },
  ];

  const pastEvents = [
    {
      title: "DKDC Season 3",
      date: "2026",
      location: "India",
      result: "AIR 1 in EV Category",
    },
  ];

  const weeklySchedule = [
    { day: "Monday", time: "7:00 PM - 9:00 PM", activity: "General Meeting" },
    { day: "Tuesday", time: "6:00 PM - 10:00 PM", activity: "Powertrain & Electronics Work" },
    { day: "Wednesday", time: "6:00 PM - 10:00 PM", activity: "Chassis & Aero Work" },
    { day: "Thursday", time: "7:00 PM - 9:00 PM", activity: "Manufacturing & Fab" },
    { day: "Saturday", time: "10:00 AM - 4:00 PM", activity: "Build Day (All Hands)" },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl text-white mb-6">Events & Schedule</h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Stay up to date with our competitions, testing sessions, and team activities.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h2 className="text-3xl text-white mb-8">Upcoming Events</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-red-500 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-red-600 text-white text-sm rounded-full">
                        {event.type}
                      </span>
                      <h3 className="text-2xl text-white">{event.title}</h3>
                    </div>
                    <p className="text-zinc-300 mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-zinc-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-zinc-600 hidden lg:block" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Schedule */}
        <div className="mb-20">
          <h2 className="text-3xl text-white mb-8">Weekly Schedule</h2>
          <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
            <div className="divide-y divide-zinc-800">
              {weeklySchedule.map((item) => (
                <div
                  key={item.day}
                  className="p-6 hover:bg-zinc-800/50 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div className="flex items-center gap-4">
                      <span className="text-white font-semibold min-w-[100px]">
                        {item.day}
                      </span>
                      <span className="text-zinc-400">{item.time}</span>
                    </div>
                    <span className="text-zinc-300">{item.activity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-zinc-500 text-sm mt-4 text-center">
            All activities take place at the Engineering Building, Room 205
          </p>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-3xl text-white mb-8">Past Competitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <div
                key={event.title}
                className="bg-zinc-900 rounded-xl p-6 border border-zinc-800"
              >
                <h3 className="text-xl text-white mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-zinc-400 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <div className="pt-4 border-t border-zinc-800">
                  <span className="text-red-500 font-semibold">{event.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}