import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const tabs = [
    { name: "Translation", path: "/" },
    { name: "Flashcards", path: "/flashcards" },
    { name: "Quiz", path: "/quiz" },
  ];

  return (
    <div className="w-full bg-white border-b border-gray-200">
      <nav className="max-w-3xl mx-auto px-4">
        <div className="flex space-x-8">
          {tabs.map((tab) => {
            const isActive =
              (tab.path === "/" && location.pathname === "/") ||
              (tab.path !== "/" && location.pathname.startsWith(tab.path));

            return (
              <Link
                key={tab.path}
                to={tab.path}
                className={cn(
                  "inline-flex items-center px-1 py-4 text-sm font-medium border-b-2 -mb-px",
                  isActive
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                )}
              >
                {tab.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
