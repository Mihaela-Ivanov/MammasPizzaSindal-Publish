using MammasPizzaSindal.Models;
using System.Collections.Generic;
using System.Linq;

namespace MammasPizzaSindal.Models
{
    public class Group<K, T>
    {
        public K Key { get; set; }
        public IEnumerable<T> Values { get; set; }
    }
}