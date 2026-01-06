// import { Card, CardContent } from "@/components/ui/card";
// import { AlertCircle } from "lucide-react";

// export default function NotFound() {
//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
//       <Card className="w-full max-w-md mx-4">
//         <CardContent className="pt-6">
//           <div className="flex mb-4 gap-2">
//             <AlertCircle className="h-8 w-8 text-red-500" />
//             <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
//           </div>

//           <p className="mt-4 text-sm text-gray-600">
//             Did you forget to add the page to the router?
//           </p>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react"; // Changed icon to a file icon

export default function Resume() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-2xl mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2 items-center">
            <FileText className="h-8 w-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-900">My Resume</h1>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">
              Click the button below to view or download my latest professional resume.
            </p>
            
            {/* You can link this to your PDF in the public folder */}
            <a 
              href="/your-resume-file.pdf" 
              target="_blank" 
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              View PDF
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
