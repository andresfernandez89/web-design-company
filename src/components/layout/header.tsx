import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Code2, Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#clients', label: 'Our Work' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
