import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="bg-dark-blue border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-ocean-blue rounded-lg flex items-center justify-center">
            <Icon name="Play" size={20} className="text-white" />
          </div>
          <span className="text-xl font-heading font-bold text-foreground">
            VideoHost
          </span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Input
              placeholder="Поиск видео..."
              className="pl-10 bg-secondary border-border text-foreground placeholder:text-muted-foreground"
            />
            <Icon
              name="Search"
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            className="text-foreground hover:text-ocean-blue"
          >
            <Icon name="Upload" size={18} className="mr-2" />
            Загрузить
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="text-foreground hover:text-ocean-blue"
          >
            <Icon name="Bell" size={18} />
          </Button>

          <Button className="bg-ocean-blue hover:bg-ocean-blue/90 text-white font-medium">
            <Icon name="User" size={16} className="mr-2" />
            Войти через Google
          </Button>
        </div>
      </div>
    </header>
  );
}
