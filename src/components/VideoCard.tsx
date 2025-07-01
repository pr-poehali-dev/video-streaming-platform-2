import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  uploadDate: string;
  channelName: string;
  channelAvatar: string;
  isSubscribed?: boolean;
}

export default function VideoCard({
  title,
  thumbnail,
  duration,
  views,
  uploadDate,
  channelName,
  channelAvatar,
  isSubscribed = false,
}: VideoCardProps) {
  return (
    <div className="group cursor-pointer animate-slide-up">
      {/* Thumbnail */}
      <div className="relative aspect-video bg-secondary rounded-lg overflow-hidden mb-3">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Duration badge */}
        <Badge
          variant="secondary"
          className="absolute bottom-2 right-2 bg-black/80 text-white border-none"
        >
          {duration}
        </Badge>

        {/* Play overlay on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-ocean-blue/90 rounded-full p-3">
            <Icon name="Play" size={24} className="text-white" />
          </div>
        </div>
      </div>

      {/* Video info */}
      <div className="flex space-x-3">
        {/* Channel avatar */}
        <div className="flex-shrink-0">
          <img
            src={channelAvatar}
            alt={channelName}
            className="w-9 h-9 rounded-full object-cover"
          />
        </div>

        {/* Video details */}
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-ocean-blue transition-colors duration-200 mb-1">
            {title}
          </h3>

          <div className="flex items-center space-x-2 mb-1">
            <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">
              {channelName}
            </span>
            {isSubscribed && (
              <Badge
                variant="outline"
                className="text-xs border-ocean-blue text-ocean-blue"
              >
                Подписка
              </Badge>
            )}
          </div>

          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
            <span>{views} просмотров</span>
            <span>•</span>
            <span>{uploadDate}</span>
          </div>
        </div>

        {/* More options */}
        <div className="flex-shrink-0">
          <Button
            variant="ghost"
            size="sm"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-muted-foreground hover:text-foreground"
          >
            <Icon name="MoreVertical" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
