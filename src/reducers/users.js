const initialState = {
  users: [
    {
      id: 1,
      nama: "desta",
      alamat: "Jakarta",
      umur: 30,
      nohp: "08989018913",
    },
    {
      id: 2,
      nama: "fadilah",
      alamat: "Jakarta",
      umur: 30,
      nohp: "08989018913",
    },
    {
      id: 3,
      nama: "bantal",
      alamat: "Jakarta",
      umur: 30,
      nohp: "08989018913",
    },
  ],
  title: "Wahidev Academy ~ ATM",
};

export default function users(state = initialState, action) {
  return state;
}
