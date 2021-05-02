using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using T01HOL001;

namespace T01HOL001
{
    [TestFixture]
    public class Test
    {
        [Test]
        public void Add_TwoNumberseGreaterThanZero()
        {
            T01_HOL_001 bm = new T01_HOL_001();
            double res = bm.Add(10, 10);
            Assert.That(res, Is.EqualTo(20));
        }
        [Test]
        public void Add_OneOfTheTwoNumbersIsLessThanZero()
        {
            T01_HOL_001 bm = new T01_HOL_001();
            double res = bm.Add(10, -10);
            Assert.That(res, Is.EqualTo(0));
        }
    }
}