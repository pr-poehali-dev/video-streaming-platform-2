import Header from "@/components/Header";
import VideoPlayer from "@/components/VideoPlayer";
import VideoCard from "@/components/VideoCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const mockVideos = [
  {
    id: "1",
    title: "Невероятные технологии будущего | Обзор новинок 2024",
    thumbnail: "/placeholder.svg",
    duration: "12:34",
    views: "1.2М",
    uploadDate: "2 дня назад",
    channelName: "ТехноОбзор",
    channelAvatar: "/placeholder.svg",
    isSubscribed: true,
  },
  {
    id: "2",
    title: "Путешествие по космосу: что мы знаем о черных дырах?",
    thumbnail: "/placeholder.svg",
    duration: "24:16",
    views: "856К",
    uploadDate: "1 неделю назад",
    channelName: "Космос Pro",
    channelAvatar: "/placeholder.svg",
    isSubscribed: false,
  },
  {
    id: "3",
    title: "Мастер-класс по приготовлению идеальной пиццы дома",
    thumbnail: "/placeholder.svg",
    duration: "18:42",
    views: "2.1М",
    uploadDate: "3 дня назад",
    channelName: "Кулинарные Секреты",
    channelAvatar: "/placeholder.svg",
    isSubscribed: true,
  },
  {
    id: "4",
    title: "Разбор самых популярных игр 2024 года",
    thumbnail: "/placeholder.svg",
    duration: "31:28",
    views: "3.4М",
    uploadDate: "5 дней назад",
    channelName: "GameReview",
    channelAvatar: "/placeholder.svg",
    isSubscribed: false,
  },
  {
    id: "5",
    title: "Как создать успешный стартап: советы от экспертов",
    thumbnail: "/placeholder.svg",
    duration: "45:12",
    views: "674К",
    uploadDate: "1 день назад",
    channelName: "Бизнес Идеи",
    channelAvatar: "/placeholder.svg",
    isSubscribed: true,
  },
  {
    id: "6",
    title: "Удивительные факты о животных, которые вас шокируют",
    thumbnail: "/placeholder.svg",
    duration: "15:33",
    views: "1.8М",
    uploadDate: "4 дня назад",
    channelName: "Мир Животных",
    channelAvatar: "/placeholder.svg",
    isSubscribed: false,
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-6">
        {/* Featured Video */}
        <div className="mb-8">
          <VideoPlayer
            src="/placeholder.svg"
            title="Главное видео дня"
            thumbnail="/placeholder.svg"
          />
          <div className="mt-4">
            <h1 className="text-2xl font-heading font-bold text-foreground mb-2">
              Революция в мире технологий: ИИ меняет нашу жизнь
            </h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <img
                    src="/placeholder.svg"
                    alt="Канал"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-foreground">ТехноБудущее</p>
                    <p className="text-sm text-muted-foreground">
                      2.5М подписчиков
                    </p>
                  </div>
                </div>
                <Button className="bg-ocean-blue hover:bg-ocean-blue/90">
                  <Icon name="UserPlus" size={16} className="mr-2" />
                  Подписаться
                </Button>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="secondary" size="sm">
                  <Icon name="ThumbsUp" size={16} className="mr-2" />
                  12К
                </Button>
                <Button variant="secondary" size="sm">
                  <Icon name="Share2" size={16} className="mr-2" />
                  Поделиться
                </Button>
                <Button variant="secondary" size="sm">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="recommended" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="recommended">Рекомендации</TabsTrigger>
            <TabsTrigger value="subscriptions">Подписки</TabsTrigger>
            <TabsTrigger value="trending">Тренды</TabsTrigger>
            <TabsTrigger value="library">Библиотека</TabsTrigger>
          </TabsList>

          <TabsContent value="recommended" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockVideos.map((video) => (
                <VideoCard key={video.id} {...video} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="subscriptions" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockVideos
                .filter((video) => video.isSubscribed)
                .map((video) => (
                  <VideoCard key={video.id} {...video} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="trending" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockVideos
                .slice()
                .sort(
                  (a, b) =>
                    parseFloat(b.views.replace(/[КМ]/, "")) -
                    parseFloat(a.views.replace(/[КМ]/, "")),
                )
                .map((video) => (
                  <VideoCard key={video.id} {...video} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="library" className="space-y-6">
            <div className="text-center py-12">
              <Icon
                name="Video"
                size={48}
                className="mx-auto text-muted-foreground mb-4"
              />
              <h3 className="text-xl font-medium text-foreground mb-2">
                Ваша библиотека пуста
              </h3>
              <p className="text-muted-foreground mb-4">
                Войдите в аккаунт, чтобы увидеть сохраненные видео
              </p>
              <Button className="bg-ocean-blue hover:bg-ocean-blue/90">
                <Icon name="User" size={16} className="mr-2" />
                Войти через Google
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
