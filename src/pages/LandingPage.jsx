import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CarouselItem } from '@/components/ui/carousel'
import companies from '../data/companies.json';
import faq from '../data/faq.json';
import { Carousel } from '@/components/ui/carousel';
import { CarouselContent } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion } from '@radix-ui/react-accordion';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
const LandingPage = () => {
  return (
    <main className='flex flex-col gap-10 sm:gap-20 py-10 sm:py-20'>
      <section className='text-center'>
      <h1 className='flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4'>
      Find You Dream Job {"  "}
      <span className='flex items-center gap-2 sm:gap-6'>
        and get{"  "}
        <img src='/logo.png' alt='Jobify' className='h-14 sm:h-24 lg:h-32'/>
      </span>
        </h1>
        <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl'>
            Explore thousands of job listings or find the perfect candidate
        </p>
      </section>
      <div className='flex gap-6 justify-center'>
        <Link to='/jobs'>
          <Button variant="outline" size="lg" > Find Jobs
          </Button>
        </Link>
        <Link to='/post-job'>
          <Button variant="destructive" size="lg" >
            Post a Job
          </Button>
        </Link>
      </div>
      <Carousel plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]} className="w-full py-10">
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {
            companies.map(({name,id,path})=>{
              return (
                <CarouselItem key={id} className='basis-1/3 lg:basis-1/6'>
                <img
                src={path}
                alt={name}
                className='h-9 sm:h-14 object-contain'
                />
                </CarouselItem>
              );
            })
          }   
        </CarouselContent>
      </Carousel>
      <img src='/banner.jpeg' className='w-full'/>
      <section className='grid grid-cols-2 md:grid-cols-2 gap-6 m-15'>
        <Card>
          <CardHeader>
            <CardTitle>For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs,track applications, and more.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and find the best candidates.
          </CardContent>
        </Card>

      </section>
      <section className='grid grid-cols-2 md:grid-cols-1 gap-6 m-15'>
        <Accordion type='single' collapsible>
          {
            faq.map((faq, index) => {
              return (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              )
            })
          }
        </Accordion>
      </section>
      
    </main>
  )
}

export default LandingPage
