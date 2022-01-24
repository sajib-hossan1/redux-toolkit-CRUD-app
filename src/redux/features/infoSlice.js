import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
    name : "contactInfo",
    initialState : {
        students : [
            {
              id: 1,
              firstName: "Himadri",
              lastName: "Bhattathiri",
              email: "Chandramani.w1@hotmail.com",
              phone: "916203204125",
              address: "474 Banerjee Fords"
            },
            {
              id: 2,
              firstName: "Subhasini",
              lastName: "Bhattacharya",
              email: "Chetan17@yahoo.co.in",
              phone: "919539284930",
              address: "52520 Bhisham Brooks"
            },
            {
              id: 3,
              firstName: "Daevika",
              lastName: "Ganaka",
              email: "Bharat89@gmail.com",
              phone: "91917416065",
              address: "78079 Patel Park"
            },
            {
              id: 4,
              firstName: "Tanya",
              lastName: "Trivedi",
              email: "Birjesh_Sinha3@hotmail.com",
              phone: "916446939697",
              address: "57761 Shreyashi Junctions"
            },
            {
              id: 5,
              firstName: "Vimala",
              lastName: "Mehrotra",
              email: "Anamika.Ahluwalia1@hotmail.com",
              phone: "917044124157",
              address: "860 Gautama Turnpike"
            },
            {
              id: 6,
              firstName: "Chapala",
              lastName: "Tagore",
              email: "Rohan17@gmail.com",
              phone: "919479607538",
              address: "300 Chandrabhaga Knoll"
            },
            {
              id: 7,
              firstName: "Rajendra",
              lastName: "Ahuja",
              email: "Vasudeva_Tagore25@yahoo.co.in",
              phone: "919187520232",
              address: "4560 Dubashi Branch"
            },
            {
              id: 8,
              firstName: "Himadri",
              lastName: "Devar",
              email: "Amritambu_Talwar@hotmail.com",
              phone: "919330236755",
              address: "1003 Girindra Rapids"
            },
            {
              id: 9,
              firstName: "Chandrakala",
              lastName: "Gowda",
              email: "Rajan51@gmail.com",
              phone: "917329504322",
              address: "967 Dhawan Burgs"
            },
            {
              id: 10,
              firstName: "Birjesh",
              lastName: "Embranthiri",
              email: "Bela.Sinha@yahoo.co.in",
              phone: "918345715321",
              address: "77860 Acharya Summit"
            },
            {
              id: 11,
              firstName: "Ghanaanand",
              lastName: "Tandon",
              email: "Deeksha.Varma12@hotmail.com",
              phone: "917093361753",
              address: "542 Ghanashyam Centers"
            },
            {
              id: 12,
              firstName: "Baalagopaal",
              lastName: "Verma",
              email: "Chandranath.p@hotmail.com",
              phone: "919432924857",
              address: "12208 Dwivedi Station"
            }
          ],
        student : {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: ""
        },
    },
    reducers : {
      getStudent : (state, action) => {
          const id = action.payload.id;
        state.student = state.students.find((el) => el.id === parseInt(id));
      },
      clearStudent : (state) => {
        state.student = {
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            phone: "",
          };
      },
      addStudent : (state, action) => {
        state.students = [action.payload, ...state.students]
      },
      editStudent : (state, action) => {
          state.students = state.students.map(el => el.id === action.payload.id ? action.payload : el);
      },
      deleteStudent : (state, action) => {
          state.students = state.students.filter(el => el.id !== action.payload);
      }
    }
})

export const {getStudent, clearStudent, addStudent, editStudent, deleteStudent} = infoSlice.actions;

export default infoSlice.reducer;