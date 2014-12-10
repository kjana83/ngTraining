using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ngTraining_Dec.Model
{
    public class Session
    {
        public int id { get; set; }
        public string name { get; set; }
        public int duration { get; set; }
        public string level { get; set; }
        public string author { get; set; }
        public string Abstract { get; set; }
        public int voteCount { get; set; }
    }
}