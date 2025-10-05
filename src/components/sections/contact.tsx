import { Mail, MessageCircle } from 'lucide-react'

export function Contact() {
  return (
    <section id='contact' className='py-20 md:py-32'>
      <div className='container mx-auto px-4 md:px-6'>
        <div className='max-w-3xl mx-auto text-center mb-12 md:mb-16'>
          <h2 className='font-headline text-4xl md:text-5xl font-bold'>Get In Touch</h2>
          <p className='mt-4 text-lg text-muted-foreground'>
            Ready to start your project? Let's discuss how we can bring your vision to life.
          </p>
        </div>
        <div className='max-w-md mx-auto'>
          <div className='flex flex-col md:flex-row gap-8 md:gap-12'>
            <div className='flex items-center gap-4 flex-1'>
              <Mail className='h-8 w-8 text-primary' />
              <div>
                <h3 className='font-semibold'>Email</h3>
                <p className='text-muted-foreground'>contact@codecanvas.com</p>
              </div>
            </div>
            <div className='flex items-center gap-4 flex-1'>
              <MessageCircle className='h-8 w-8 text-primary' />
              <div>
                <h3 className='font-semibold'>WhatsApp</h3>
                <p className='text-muted-foreground whitespace-nowrap'>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
