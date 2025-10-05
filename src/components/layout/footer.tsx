import { Code2, Instagram, Mail, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <footer className='border-t border-border/50 py-12 bg-card'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          <div className='flex items-center gap-2'>
            <Code2 className='h-8 w-8 text-primary' />
            <span className='text-xl font-bold font-headline'>CodeCanvas</span>
          </div>
          <p className='text-sm text-muted-foreground text-center md:text-left'>
            © {new Date().getFullYear()} CodeCanvas. All rights reserved.
          </p>
          <div className='flex items-center gap-4'>
            <a href='mailto:contact@codecanvas.com' aria-label='Email'>
              <Mail className='h-6 w-6 text-muted-foreground hover:text-primary transition-colors' />
            </a>
            <a href='https://wa.me/1234567890' aria-label='WhatsApp'>
              <MessageCircle className='h-6 w-6 text-muted-foreground hover:text-primary transition-colors' />
            </a>
            <a href='#' aria-label='Instagram'>
              <Instagram className='h-6 w-6 text-muted-foreground hover:text-primary transition-colors' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
