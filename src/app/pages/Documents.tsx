import { useState } from "react";
import { FileText, Download } from "lucide-react";
import carImage from "../../imports/car.JPG";

interface VehicleDocument {
  id: string;
  vehicleName: string;
  imageUrl: string;
  documents: {
    name: string;
    pdfUrl: string;
  }[];
}

export function Documents() {
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleDocument | null>(null);

  // Vehicle data with images and associated PDF documents
  const vehicles: VehicleDocument[] = [
    {
      id: "1",
      vehicleName: "EV001",
      imageUrl: carImage,
      documents: [
        { name: "Technical Specifications", pdfUrl: "/documents/technical-specs.pdf" },
        { name: "Design Report", pdfUrl: "/documents/design-report.pdf" },
        { name: "Safety Documentation", pdfUrl: "/documents/safety-docs.pdf" },
        { name: "Performance Analysis", pdfUrl: "/documents/performance.pdf" },
        { name: "Maintenance Manual", pdfUrl: "/documents/maintenance.pdf" },
      ],
    },
  ];

  const openDocument = (pdfUrl: string) => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-zinc-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-10 h-10 text-red-600" />
            <h1 className="text-4xl font-bold text-white">Vehicle Documents</h1>
          </div>
          <p className="text-zinc-400">Click on any vehicle to view its technical documentation</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-red-600 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedVehicle(vehicle)}
            >
              {/* Vehicle Image */}
              <div className="relative h-[600px] overflow-hidden">
                <img
                  src={vehicle.imageUrl}
                  alt={vehicle.vehicleName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-4xl font-bold text-white mb-2">{vehicle.vehicleName}</h3>
                  <p className="text-lg text-zinc-300">{vehicle.documents.length} documents available</p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white text-zinc-950 px-8 py-4 rounded-lg font-semibold text-xl">
                    View Documents
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Document Modal */}
      {selectedVehicle && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVehicle(null)}
        >
          <div
            className="bg-zinc-900 border border-zinc-800 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-zinc-900 border-b border-zinc-800 p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">{selectedVehicle.vehicleName}</h2>
                <p className="text-zinc-400">Select a document to view</p>
              </div>
              <button
                onClick={() => setSelectedVehicle(null)}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Vehicle Image */}
            <div className="px-6 pt-6">
              <img
                src={selectedVehicle.imageUrl}
                alt={selectedVehicle.vehicleName}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            {/* Document List */}
            <div className="p-6 space-y-3">
              {selectedVehicle.documents.map((doc, index) => (
                <button
                  key={index}
                  onClick={() => openDocument(doc.pdfUrl)}
                  className="w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-red-600 rounded-lg p-4 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-white font-semibold group-hover:text-red-500 transition-colors">
                          {doc.name}
                        </h3>
                        <p className="text-sm text-zinc-400">PDF Document</p>
                      </div>
                    </div>
                    <Download className="w-5 h-5 text-zinc-400 group-hover:text-red-500 transition-colors" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
