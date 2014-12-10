using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ngTraining_Dec.Model
{
    public class Event
    {
        public int id { get; set; }
        public string name { get; set; }
        public DateTime date { get; set; }
        public string location { get; set; }
        public string city { get; set; }
        public IList<Session> sessions { get; set; }
    }
}