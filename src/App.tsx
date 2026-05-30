import { useEffect, useState } from 'react'
import './App.css'
import { 
  Music, 
  Plus, 
  FileText, 
  Headphones, 
  Mic2, 
  Guitar, 
  Send,
  Facebook,
  Instagram,
  Youtube,
  Music2,
  Menu,
  X,
  ChevronRight,
  Play,
  ShoppingCart,
  Clock,
  CheckCircle,
  Upload
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'

// Scroll animation hook
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('anim-visible')
            entry.target.classList.remove('anim-hidden')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach((el) => {
      el.classList.add('anim-hidden')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Начало', href: '#hero' },
    { name: 'Услуги', href: '#services' },
    { name: 'Песни', href: '#songs' },
    { name: 'За мен', href: '#about' },
    { name: 'Контакт', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-bg/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="font-heading font-bold text-xl text-white">
            Buren Trun <span className="text-red-accent">Project</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-red-accent transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#order-song">
              <Button className="bg-red-accent hover:bg-red-700 text-white font-semibold px-6">
                Поръчай песен
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-bg/95 backdrop-blur-md">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-white/80 hover:text-red-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#order-song" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full mt-4 bg-red-accent hover:bg-red-700 text-white">
                Поръчай песен
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Buren Trun Project Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* ВДИГАНЕ НА ЗАГЛАВИЕТО - ДОБАВЕНО -mt-24 */}
        <div className="-mt-24">
          <h1 className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white uppercase tracking-tight animate-slideInBottom">
            Buren Trun
          </h1>
          <p className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-red-accent mt-2 animate-slideInBottom delay-200">
            Project
          </p>
        </div>
        
        <p className="mt-8 text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto animate-slideInBottom delay-300">
          Поезия, превърната в музика. Песни, създадени с душа.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-slideInBottom delay-500">
          <a href="#songs">
            <Button size="lg" className="bg-red-accent hover:bg-red-700 text-white font-semibold px-8 py-6 text-lg">
              <Play className="mr-2 h-5 w-5" />
              Разгледай песните
            </Button>
          </a>
          <a href="#order-song">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg">
              <Music className="mr-2 h-5 w-5" />
              Поръчай си песен
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="w-8 h-8 text-white/50 rotate-90" />
      </div>
    </section>
  )
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: <Headphones className="w-12 h-12" />,
      title: 'Готови Песни',
      description: 'Разгледай моите готови песни с пълни аранжименти. Всяка песен е уникална и готова за запис.',
      cta: 'Виж песните',
      href: '#songs',
    },
    {
      icon: <Plus className="w-12 h-12" />,
      title: 'Поръчай Си Песен',
      description: 'Искаш оригинална песен по твоя идея? Разкажи ми какво търсиш и ще създам нещо специално за теб.',
      cta: 'Започни поръчка',
      href: '#order-song',
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: 'Песен По Твой Текст',
      description: 'Имаш готов текст и искаш да го превърнеш в песен? Ще създам музика и аранжимент, които да допълват твоите думи.',
      cta: 'Изпрати текст',
      href: '#lyrics-song',
    },
  ]

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-dark-bg uppercase">
            Моите Услуги
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Три начина да работим заедно
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-gray-50 p-8 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-card scroll-animate"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-red-accent mb-6 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="font-heading font-bold text-2xl text-dark-bg mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <a href={service.href}>
                <Button variant="outline" className="border-red-accent text-red-accent hover:bg-red-accent hover:text-white">
                  {service.cta}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Ready Songs Section
function SongsSection() {
  const [selectedGenre, setSelectedGenre] = useState('all')
  const [selectedSong, setSelectedSong] = useState<any | null>(null)

  const songs = [
    {
      id: 1,
      title: 'Непознати Улици',
      genre: 'pop',
      genreLabel: 'Поп',
      price: 250,
      description: 'Мелодична поп песен за спомените, които носят непознати улици.',
      duration: '3:45',
      image: '/images/song-1.jpg',
    },
    {
      id: 2,
      title: 'Среднощни Мисли',
      genre: 'rock',
      genreLabel: 'Акустичен рок',
      price: 280,
      description: 'Интимна акустична композиция за нощните размисли.',
      duration: '4:12',
      image: '/images/song-2.jpg',
    },
    {
      id: 3,
      title: 'Прости ми, Татко',
      genre: 'ballad',
      genreLabel: 'Балада',
      price: 300,
      description: 'Емоционална балада за синовната признателност.',
      duration: '4:25',
      image: '/images/song-3.jpg',
    },
    {
      id: 4,
      title: 'Летни Спомени',
      genre: 'pop-rock',
      genreLabel: 'Поп-рок',
      price: 260,
      description: 'Енергична песен за безгрижните летни дни.',
      duration: '3:20',
      image: '/images/song-4.jpg',
    },
  ]

  const genres = [
    { id: 'all', label: 'Всички' },
    { id: 'pop', label: 'Поп' },
    { id: 'rock', label: 'Рок' },
    { id: 'ballad', label: 'Балади' },
    { id: 'pop-rock', label: 'Поп-рок' },
  ]

  const filteredSongs = selectedGenre === 'all' 
    ? songs 
    : songs.filter(song => song.genre === selectedGenre)

  return (
    <section id="songs" className="py-24 md:py-32 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white uppercase">
            Готови Песни за Продажба
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Уникални песни с пълни аранжименти, готови за запис
          </p>
        </div>

        {/* Genre Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 scroll-animate">
          {genres.map((genre) => (
            <button
              key={genre.id}
              onClick={() => setSelectedGenre(genre.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedGenre === genre.id
                  ? 'bg-red-accent text-white'
                  : 'bg-dark-card text-white/70 hover:bg-dark-border hover:text-white'
              }`}
            >
              {genre.label}
            </button>
          ))}
        </div>

        {/* Songs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredSongs.map((song, index) => (
            <div
              key={song.id}
              className="group bg-dark-card rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 scroll-animate"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 bg-gradient-to-br from-red-accent/20 to-dark-bg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Music2 className="w-20 h-20 text-red-accent/30" />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    onClick={() => setSelectedSong(song)}
                    className="bg-red-accent hover:bg-red-700 text-white"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Преслушай
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-red-accent uppercase tracking-wider">
                    {song.genreLabel}
                  </span>
                  <span className="text-xs text-white/50 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {song.duration}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  {song.title}
                </h3>
                <p className="text-white/60 text-sm mb-4">
                  {song.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">
                    {song.price} €
                  </span>
                  <Button 
                    onClick={() => setSelectedSong(song)}
                    className="bg-red-accent hover:bg-red-700 text-white"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Купи
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedSong} onOpenChange={() => setSelectedSong(null)}>
        <DialogContent className="bg-dark-card border-dark-border text-white max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">{selectedSong?.title}</DialogTitle>
            <DialogDescription className="text-white/60">
              {selectedSong?.genreLabel} • {selectedSong?.duration}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="h-40 bg-gradient-to-br from-red-accent/20 to-dark-bg rounded-lg flex items-center justify-center mb-4">
              <Music2 className="w-16 h-16 text-red-accent/40" />
            </div>
            <p className="text-white/80 mb-4">{selectedSong?.description}</p>
            <div className="flex items-center justify-between p-4 bg-dark-bg rounded-lg">
              <span className="text-3xl font-bold text-white">{selectedSong?.price} €</span>
              <span className="text-sm text-white/50">Пълен аранжимент</span>
            </div>
          </div>
          <div className="flex gap-3">
            <Button className="flex-1 bg-red-accent hover:bg-red-700 text-white">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Купи сега
            </Button>
            <Button variant="outline" className="border-dark-border text-white hover:bg-dark-border">
              <Play className="mr-2 h-4 w-4" />
              Демо
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

// Order Song Section
function OrderSongSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', description: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="order-song" className="py-24 md:py-32 bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-animate">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white uppercase mb-6">
              Поръчай Си Песен
            </h2>
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              Искаш оригинална песен, създадена специално за теб? Разкажи ми за твоя проект.
            </p>
            <div className="flex items-center gap-3 text-white/60">
              <Clock className="w-5 h-5 text-red-accent" />
              <span>Срок за изпълнение: 7-14 дни</span>
            </div>
          </div>
          <div className="bg-dark-card p-8 rounded-lg border border-dark-border scroll-animate">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="font-heading text-2xl text-white mb-2">Благодаря!</h3>
                <p className="text-white/60">Ще се свържа с теб скоро.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input required placeholder="Твоето име" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="bg-dark-bg border-dark-border text-white" />
                <Input required type="email" placeholder="email@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="bg-dark-bg border-dark-border text-white" />
                <Input type="tel" placeholder="+359 XXX XXX XXX" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="bg-dark-bg border-dark-border text-white" />
                <Textarea required placeholder="Каква песен търсиш?" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="bg-dark-bg border-dark-border text-white min-h-[120px]" />
                <Button type="submit" className="w-full bg-red-accent hover:bg-red-700 text-white py-6">Изпрати запитване</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// Lyrics Song Section
function LyricsSongSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="lyrics-song" className="py-24 md:py-32 bg-white text-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-50 p-8 rounded-lg order-2 lg:order-1 scroll-animate">
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="font-heading text-2xl mb-2">Получено!</h3>
                <p className="text-gray-600">Ще се свържа с теб за детайли по аранжимента.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input required placeholder="Твоето име" className="bg-white border-gray-300" />
                <Input required type="email" placeholder="email@example.com" className="bg-white border-gray-300" />
                <Textarea required placeholder="Твоите стихове..." className="bg-white border-gray-300 min-h-[150px]" />
                <div className="bg-white border-2 border-dashed border-gray-200 rounded-lg p-6 text-center cursor-pointer hover:border-red-accent transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Прикачи файл с текст (опционално)</p>
                </div>
                <Button type="submit" className="w-full bg-red-accent hover:bg-red-700 text-white py-6">Изпрати текста</Button>
              </form>
            )}
          </div>
          <div className="order-1 lg:order-2 scroll-animate">
            <h2 className="font-heading font-bold text-4xl md:text-5xl uppercase mb-6">
              Направи Ми Песен По Мой Текст
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Имаш готови стихове и искаш да ги чуеш облечени в музика? Изпрати ми ги и ще създам аранжимент, който да оживи думите ти.
            </p>
            <ul className="space-y-4">
              {[
                'Индивидуален подход към всяка дума',
                'Професионален запис на всички инструменти',
                'Възможност за избор на жанр и настроение'
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-accent mt-1 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-dark-bg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative scroll-animate">
            <div className="aspect-square bg-gradient-to-br from-red-accent/30 to-dark-card rounded-lg overflow-hidden flex items-center justify-center">
              <Music2 className="w-32 h-32 text-red-accent/40" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-red-accent p-8 rounded-lg hidden md:block">
              <p className="font-heading font-bold text-4xl">10+</p>
              <p className="text-sm uppercase tracking-wider">Години опит</p>
            </div>
          </div>
          <div className="scroll-animate">
            <h2 className="font-heading font-bold text-4xl md:text-5xl uppercase mb-6">
              За Buren Trun Project
            </h2>
            <p className="text-lg text-white/70 mb-6 leading-relaxed">
              Аз съм поет и музикант, който вярва, че всяка истинска емоция заслужава своята мелодия. Buren Trun Project е мястото, където думите срещат звука.
            </p>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Специализирам в създаването на авторска музика, която не просто звучи добре, а разказва история. От акустични балади до пълни рок и поп аранжименти.
            </p>
            <blockquote className="border-l-4 border-red-accent pl-6 py-2 mb-8">
              <p className="text-xl text-white/90 italic font-medium">
                "Поезията е музика, която чуваме с очите. Музиката е поезия, която чувстваме с душата."
              </p>
            </blockquote>
            <div className="flex gap-4">
              <Mic2 className="text-red-accent" size={32} />
              <Guitar className="text-red-accent" size={32} />
              <Music2 className="text-red-accent" size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-dark-card to-dark-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-animate">
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-white uppercase mb-6">
          Свържи се с Мен
        </h2>
        <p className="text-lg text-white/60 mb-12">
          Готов ли си да създадем нещо уникално? Очаквам твоето съобщение.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <a 
            href="mailto:contact@burentrun.com" 
            className="group flex items-center gap-3 text-white/80 hover:text-red-accent transition-colors text-lg"
          >
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-red-accent/10">
              <Send size={20} />
            </div>
            contact@burentrun.com
          </a>
          <span className="hidden sm:block text-white/20">|</span>
          <a 
            href="tel:+359876722682" 
            className="group flex items-center gap-3 text-white/80 hover:text-red-accent transition-colors text-lg"
          >
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-red-accent/10">
              <Send size={20} className="rotate-90" />
            </div>
            +359 876 722 682
          </a>
        </div>

        <div className="flex justify-center gap-8">
          <a href="https://facebook.com/buren.trun" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-red-accent transition-all transform hover:scale-110">
            <Facebook size={32} />
          </a>
          <a href="https://instagram.com/buren.trun" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-red-accent transition-all transform hover:scale-110">
            <Instagram size={32} />
          </a>
          <a href="https://youtube.com/@burentrun" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-red-accent transition-all transform hover:scale-110">
            <Youtube size={32} />
          </a>
          <a href="https://tiktok.com/@buren_trun_music" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-red-accent transition-all transform hover:scale-110">
            <Music2 size={32} />
          </a>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-dark-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a href="#hero" className="font-heading font-bold text-2xl text-white">
              Buren Trun <span className="text-red-accent">Project</span>
            </a>
            <p className="text-white/50 text-sm mt-1">Поезия, превърната в музика</p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/50 hover:text-red-accent transition-colors">
              Политика за поверителност
            </a>
            <a href="#" className="text-white/50 hover:text-red-accent transition-colors">
              Условия за ползване
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-border text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Buren Trun Project. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main App
function App() {
  useScrollAnimation()

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <SongsSection />
      <OrderSongSection />
      <LyricsSongSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App