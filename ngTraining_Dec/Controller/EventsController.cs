using ngTraining_Dec.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace ngTraining_Dec.Controller
{
    public class EventsController : ApiController
    {
        private IList<Event> eventList = new List<Event>
        {
            new Event
        {
            id=1,
            name = "AngualrJs Training",
            city = "Bangalore",
            location = "Global Axis",
            date=new DateTime(2014,12,2,11,0,0),
            sessions = new List<Session>
            {
                new Session{id=1, name="Architecture",level="Introductory",author="Jana",duration=1, Abstract="About the Architecture",voteCount=1},
                new Session{id=2,name="Two Way Binding",level="Introductory",author="Jana",duration=1,Abstract="Two way binding by dirty checking",voteCount=1},
                new Session{id=3,name="Directives",level="Intermediate",author="Jana",duration=1,Abstract="Built in directives",voteCount=1},
                new Session{id=4,name="Routing",level="Advanced",author="Jana",duration=1,voteCount=1},
            }
        },
        new Event
        {
            id=2,
            name = "Java Training",
            city = "Bangalore",
            location = "Global Axis",
            date=new DateTime(2014,12,5,11,0,0),
            sessions = new List<Session>
            {
                new Session{id=1, name="Architecture",level="Introductory",author="Jana",duration=1, Abstract="About the Architecture",voteCount=1},
                new Session{id=2,name="Java Introduction",level="Introductory",author="Jana",duration=1,Abstract="Java Test",voteCount=1},
                new Session{id=3,name="Core Java",level="Intermediate",author="Jana",duration=1,Abstract="You will be learning Core Java",voteCount=1},
                new Session{id=4,name="Advanced Java",level="Advanced",author="Jana",duration=1,voteCount=1},
            }
        },
        new Event
        {
            id=3,
            name = "Asp.Net MVC Training",
            city = "Bangalore",
            location = "Global Axis",
            date=new DateTime(2014,12,20,11,0,0),
            sessions = new List<Session>
            {
                new Session{id=1, name="MVC ",level="Introductory",author="Jana",duration=1, Abstract="About the Architecture",voteCount=1},
                new Session{id=2,name="Routing",level="Introductory",author="Murali",duration=1,Abstract="Two way binding by dirty checking",voteCount=1},
                new Session{id=3,name="Controllers",level="Intermediate",author="KK",duration=1,Abstract="You will be knowing about the Controllers",voteCount=1},
                new Session{id=4,name="Filters",level="Advanced",author="Jinan",duration=1,voteCount=1},
            }
        }

        };

        public HttpResponseMessage GetAll()
        {
            return Request.CreateResponse(HttpStatusCode.OK, eventList);
        }
        public HttpResponseMessage Get(int id)
        {
            return Request.CreateResponse(HttpStatusCode.OK,
                eventList.FirstOrDefault(e => e.id == id));
        }
    }
}