import { useState, useEffect } from "react";
import { projectId, publicAnonKey } from "/utils/supabase/info";

interface TeamApplication {
  id: string;
  name: string;
  email: string;
  major: string;
  year: string;
  message: string;
  submittedAt: string;
}

export function Admin() {
  const [applications, setApplications] = useState<TeamApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log("Fetching applications from:", `https://${projectId}.supabase.co/functions/v1/make-server-ceaf7d12/team-applications`);

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-ceaf7d12/team-applications`,
        {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        }
      );

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error(`Failed to fetch applications: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Fetched data:", data);

      if (data.success) {
        setApplications(data.applications);
        console.log("Applications loaded:", data.applications.length);
      } else {
        throw new Error(data.error || "Failed to fetch applications");
      }
    } catch (err) {
      console.error("Error fetching applications:", err);
      setError(err instanceof Error ? err.message : "Failed to load applications");
    } finally {
      setLoading(false);
    }
  };

  const filteredApplications = applications.filter((app) => {
    const search = searchTerm.toLowerCase();
    return (
      app.name.toLowerCase().includes(search) ||
      app.email.toLowerCase().includes(search) ||
      app.major.toLowerCase().includes(search) ||
      app.year.toLowerCase().includes(search) ||
      app.message.toLowerCase().includes(search)
    );
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-zinc-400">Team Application Submissions</p>
          <div className="mt-4 p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-sm">
            <p className="text-zinc-400">
              <strong className="text-white">Debug Info:</strong> Open browser console (F12) to see detailed logs.
              {error && <span className="block text-red-500 mt-2">Error: {error}</span>}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex-1 min-w-[250px]">
              <input
                type="text"
                placeholder="Search applications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-red-600 transition-colors"
              />
            </div>
            <button
              onClick={fetchApplications}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
            >
              Refresh
            </button>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-zinc-400">
              Total Applications: <span className="text-white font-semibold">{applications.length}</span>
              {searchTerm && (
                <span className="ml-2">
                  | Filtered: <span className="text-white font-semibold">{filteredApplications.length}</span>
                </span>
              )}
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-red-600 border-r-transparent"></div>
              <p className="mt-4 text-zinc-400">Loading applications...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500 mb-4">{error}</p>
              <button
                onClick={fetchApplications}
                className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
              >
                Retry
              </button>
            </div>
          ) : filteredApplications.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-zinc-400">
                {searchTerm ? "No applications match your search." : "No applications submitted yet."}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-3 px-4 text-zinc-400 font-semibold">Name</th>
                    <th className="text-left py-3 px-4 text-zinc-400 font-semibold">Email</th>
                    <th className="text-left py-3 px-4 text-zinc-400 font-semibold">Major</th>
                    <th className="text-left py-3 px-4 text-zinc-400 font-semibold">Year</th>
                    <th className="text-left py-3 px-4 text-zinc-400 font-semibold">Submitted</th>
                    <th className="text-left py-3 px-4 text-zinc-400 font-semibold">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApplications.map((app) => (
                    <tr key={app.id} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                      <td className="py-4 px-4 text-white font-medium">{app.name}</td>
                      <td className="py-4 px-4 text-zinc-300">
                        <a href={`mailto:${app.email}`} className="hover:text-red-500 transition-colors">
                          {app.email}
                        </a>
                      </td>
                      <td className="py-4 px-4 text-zinc-300">{app.major || "-"}</td>
                      <td className="py-4 px-4 text-zinc-300">{app.year || "-"}</td>
                      <td className="py-4 px-4 text-zinc-400 text-sm">{formatDate(app.submittedAt)}</td>
                      <td className="py-4 px-4 text-zinc-300 max-w-md">
                        <div className="line-clamp-3 hover:line-clamp-none transition-all cursor-pointer">
                          {app.message}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
