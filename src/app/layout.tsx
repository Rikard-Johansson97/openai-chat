import Sidebar from "@/components/Sidebar";
import "./globals.css";

export const metadata = {
  title: "openAI Chat",
  description: "Test out the openAI API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className='flex'>
          <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
            <Sidebar />
          </div>

          {/* client provider */}
          <div className='bg-[#343541] flex-1'>{children}</div>
        </div>
      </body>
    </html>
  );
}
