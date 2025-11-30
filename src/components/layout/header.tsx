import { Button } from '@/components/ui/button'
import { ESFlag, PTFlag, USFlag } from '@/components/ui/flags'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Code2, Menu } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export function Header({ lang, dict }: { lang: string, dict: any }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: '#services', label: dict['nav.services'] },
    { href: '#clients', label: dict['nav.work'] },
    { href: '#contact', label: dict['nav.contact'] },
  ]

  const languages = [
    { code: 'en', label: 'English', flag: <USFlag className="w-5 h-auto rounded-sm" />, href: '/' },
    { code: 'es', label: 'Español', flag: <ESFlag className="w-5 h-auto rounded-sm" />, href: '/es' },
    { code: 'pt', label: 'Português', flag: <PTFlag className="w-5 h-auto rounded-sm" />, href: '/pt' },
  ]

  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const currentLang = languages.find(l => l.code === lang) || languages[0]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      )}
    >
      <div className='container mx-auto flex h-20 items-center justify-between px-4 md:px-6'>
        <a href='#home' className='flex items-center gap-2' aria-label='Back to top'>
          <Code2 className='h-8 w-8 text-primary' />
          <span className='text-xl font-bold font-headline'>CodeCanvas</span>
        </a>
        <nav className='hidden md:flex items-center gap-8'>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className='relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group'
            >
              {item.label}
              <span className='absolute bottom-[-2px] left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left'></span>
            </a>
          ))}
          
          <div className="relative ml-4">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent transition-colors text-sm font-medium"
            >
              <span className="flex items-center justify-center w-6 h-4 overflow-hidden rounded-sm bg-muted/20">
                {currentLang.flag}
              </span>
              <span>{currentLang.code.toUpperCase()}</span>
            </button>
            
            {langMenuOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setLangMenuOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-40 bg-card border border-border rounded-md shadow-lg z-50 py-1 overflow-hidden">
                  {languages.map((l) => (
                    <a
                      key={l.code}
                      href={l.href}
                      className={cn(
                        "flex items-center gap-3 px-4 py-2 text-sm hover:bg-accent transition-colors",
                        lang === l.code ? "bg-accent/50 text-primary" : "text-foreground"
                      )}
                      onClick={() => setLangMenuOpen(false)}
                    >
                      <span className="flex items-center justify-center w-5 h-3.5 overflow-hidden rounded-sm bg-muted/20">
                        {l.flag}
                      </span>
                      <span>{l.label}</span>
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        </nav>
        <div className='md:hidden'>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon'>
                <Menu className='h-6 w-6' />
                <span className='sr-only'>Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-[300px] sm:w-[400px] bg-card p-0'>
              <div className='flex flex-col h-full'>
                <div className='p-6 border-b'>
                  <a
                    href='#home'
                    className='flex items-center gap-2'
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Code2 className='h-8 w-8 text-primary' />
                    <span className='text-xl font-bold font-headline'>CodeCanvas</span>
                  </a>
                </div>
                <nav className='flex flex-col gap-6 p-6'>
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className='text-lg font-medium text-foreground hover:text-primary transition-colors'
                    >
                      {item.label}
                    </a>
                  ))}
                  
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-3 font-medium">Select Language</p>
                    <div className="grid grid-cols-1 gap-2">
                      {languages.map((l) => (
                        <a
                          key={l.code}
                          href={l.href}
                          className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-md transition-colors border border-transparent",
                            lang === l.code ? "bg-accent border-border text-primary" : "hover:bg-accent/50 text-foreground"
                          )}
                        >
                          <span className="flex items-center justify-center w-8 h-6 overflow-hidden rounded-sm bg-muted/20">
                            {React.cloneElement(l.flag as React.ReactElement, { className: "w-full h-full object-cover" })}
                          </span>
                          <span className="font-medium">{l.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
