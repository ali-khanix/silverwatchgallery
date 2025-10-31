import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Payment[]> => {
  return [
    {
      id: "728ed521",
      amount: 134000,
      status: "در حال ارسال",
      username: "مهدی بهاری",
      email: "mehdi.bahari@gmail.com",
    },
    {
      id: "728ed522",
      amount: 124000,
      status: "موفق",
      username: "سارا احمدی",
      email: "sara.ahmadi@gmail.com",
    },
    {
      id: "728ed523",
      amount: 167000,
      status: "موفق",
      username: "علی رضایی",
      email: "ali.rezaei@gmail.com",
    },
    {
      id: "728ed524",
      amount: 156000,
      status: "ناموفق",
      username: "فاطمه مرادی",
      email: "fateme.moradi@gmail.com",
    },
    {
      id: "728ed525",
      amount: 145000,
      status: "موفق",
      username: "نگین صادقی",
      email: "negin.sadeghi@gmail.com",
    },
    {
      id: "728ed526",
      amount: 189000,
      status: "در حال ارسال",
      username: "رضا اکبری",
      email: "reza.akbari@gmail.com",
    },
    {
      id: "728ed527",
      amount: 178000,
      status: "موفق",
      username: "الهام نظری",
      email: "elham.nazari@gmail.com",
    },
    {
      id: "728ed528",
      amount: 190000,
      status: "موفق",
      username: "امین کریمی",
      email: "amin.karimi@gmail.com",
    },
    {
      id: "728ed529",
      amount: 134000,
      status: "ناموفق",
      username: "بهاره موسوی",
      email: "bahare.mousavi@gmail.com",
    },
    {
      id: "728ed52a",
      amount: 543000,
      status: "موفق",
      username: "نوید جعفری",
      email: "navid.jafari@gmail.com",
    },
    {
      id: "728ed52b",
      amount: 234000,
      status: "در حال ارسال",
      username: "شادی محمدی",
      email: "shadi.mohammadi@gmail.com",
    },
    {
      id: "728ed52c",
      amount: 345000,
      status: "موفق",
      username: "حسین قنبری",
      email: "hossein.ghanbari@gmail.com",
    },
    {
      id: "728ed52d",
      amount: 335000,
      status: "ناموفق",
      username: "ناهید قاسمی",
      email: "nahid.ghasemi@gmail.com",
    },
    {
      id: "728ed52e",
      amount: 664000,
      status: "در حال ارسال",
      username: "کامران نوری",
      email: "kamran.nouri@gmail.com",
    },
    {
      id: "728ed52f",
      amount: 332000,
      status: "موفق",
      username: "پریسا شریفی",
      email: "parisa.sharifi@gmail.com",
    },
    {
      id: "728ed52g",
      amount: 413000,
      status: "ناموفق",
      username: "حمید تقوی",
      email: "hamid.taghavi@gmail.com",
    },
    {
      id: "728ed52h",
      amount: 345000,
      status: "در حال ارسال",
      username: "لیلا رستمی",
      email: "leila.rostami@gmail.com",
    },
    {
      id: "728ed52i",
      amount: 754000,
      status: "موفق",
      username: "احسان توکلی",
      email: "ehsan.tavakoli@gmail.com",
    },
    {
      id: "728ed52j",
      amount: 643000,
      status: "ناموفق",
      username: "مینا افشار",
      email: "mina.afshar@gmail.com",
    },
    {
      id: "728ed52k",
      amount: 543000,
      status: "در حال ارسال",
      username: "حبیب سلطانی",
      email: "habib.soltani@gmail.com",
    },
    {
      id: "728ed52l",
      amount: 324000,
      status: "موفق",
      username: "آزاده بهمنی",
      email: "azadeh.bahmani@gmail.com",
    },
    {
      id: "728ed52m",
      amount: 123000,
      status: "در حال ارسال",
      username: "کاظم عباسی",
      email: "kazem.abbasi@gmail.com",
    },
    {
      id: "728ed52n",
      amount: 422000,
      status: "ناموفق",
      username: "شیما فلاح",
      email: "shima.fallah@gmail.com",
    },
    {
      id: "728ed52o",
      amount: 712000,
      status: "موفق",
      username: "پدرام احمدیان",
      email: "pedram.ahmadian@gmail.com",
    },
    {
      id: "728ed52p",
      amount: 360000,
      status: "موفق",
      username: "هانیه رفیعی",
      email: "haniyeh.rafiei@gmail.com",
    },
    {
      id: "728ed52q",
      amount: 454000,
      status: "در حال ارسال",
      username: "نوید رسولی",
      email: "navid.rasouli@gmail.com",
    },
    {
      id: "728ed52r",
      amount: 382000,
      status: "موفق",
      username: "آرزو نادری",
      email: "arezu.naderi@gmail.com",
    },
    {
      id: "728ed52s",
      amount: 328000,
      status: "ناموفق",
      username: "مسعود کاظمی",
      email: "masoud.kazemi@gmail.com",
    },
    {
      id: "728ed52t",
      amount: 250000,
      status: "موفق",
      username: "مهسا رجبی",
      email: "mahsa.rajabi@gmail.com",
    },
    {
      id: "728ed52u",
      amount: 658000,
      status: "موفق",
      username: "پویان قربانی",
      email: "pooyan.ghorbani@gmail.com",
    },
    {
      id: "728ed52v",
      amount: 691000,
      status: "موفق",
      username: "هستی مقدم",
      email: "hasti.moghadam@gmail.com",
    },
    {
      id: "728ed52w",
      amount: 969000,
      status: "موفق",
      username: "احمد صابری",
      email: "ahmad.saberi@gmail.com",
    },
    {
      id: "728ed52x",
      amount: 617000,
      status: "ناموفق",
      username: "فرشته داوودی",
      email: "fereshteh.davoodi@gmail.com",
    },
    {
      id: "728ed52y",
      amount: 173000,
      status: "موفق",
      username: "رامین نوری",
      email: "ramin.nouri@gmail.com",
    },
    {
      id: "728ed52z",
      amount: 843000,
      status: "موفق",
      username: "احسان کرمی",
      email: "ehsan.karami@gmail.com",
    },
    {
      id: "728ed521f",
      amount: 914000,
      status: "در حال ارسال",
      username: "زهرا حسینی",
      email: "zahra.hosseini@gmail.com",
    },
  ];
};

const PaymentsPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">همه ی پرداخت ها</h1>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PaymentsPage;
