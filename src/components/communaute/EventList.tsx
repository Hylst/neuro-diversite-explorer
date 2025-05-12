
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  type: string;
  description: string;
}

interface EventListProps {
  events: Event[];
}

const EventList = ({ events }: EventListProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{event.type}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{event.date}</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{event.location}</span>
              </div>
              <p className="text-sm text-muted-foreground">{event.description}</p>
              <div className="mt-4">
                <Button variant="outline" size="sm" className="w-full">
                  Plus d'informations
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default EventList;
