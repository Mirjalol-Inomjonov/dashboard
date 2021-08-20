<template>
  <div class="container">
    <div class="form-user">
      <form action="fname" class="form">
        <label class="form__lable" for="fname">First Name</label>
        <br />
        <input
          class="form__input"
          type="text"
          v-model="user.firstName"
          id="fname"
          placeholder="Mirjalol"
          required="required"
        />
      </form>

      <form action="lname" class="form">
        <label class="form__lable" for="lname">Last Name</label>
        <br />
        <input
          class="form__input"
          v-model="user.lastName"
          type="text"
          id="lname"
          placeholder="Inomjonov"
          required="required"
        />
      </form>

      <form action="department" class="form">
        <label class="form__lable" for="department">Department</label>
        <br />
        <select
          class="form__input"
          v-model="user.department"
          name="department"
          id="department"
          required="required"
        >
          <option class="option selected" disabled selected value="Choose...">
            Choose...
          </option>
          <option class="option" value="Acounting">Acounting</option>
          <option class="option" value="Marketing">Marketing</option>
          <option class="option" value="IT">IT</option>
        </select>
      </form>

      <form action="position" class="form">
        <label class="form__lable" for="positon">Positon</label>
        <br />
        <input
          class="form__input"
          type="text"
          id="positon"
          v-model="user.position"
          placeholder="positon"
          required="required"
        />
      </form>

      <form action="gender" class="form">
        <label class="form__lable" for="positon">Gender</label>
        <div class="form__gender">
          <div>
            <input
              class="form__radio-btn"
              type="radio"
              id="male"
              value="Male"
              v-model="user.gender"
              name="checked"
            />
            <label for="male">Male</label>
          </div>
          <div>
            <input
              class="form__radio-btn"
              type="radio"
              v-model="user.gender"
              id="female"
              value="Female"
              name="checked"
            />
            <label for="female">Female</label>
          </div>
        </div>

        <div>
          <form action="birth">
            <label class="form__lable" for="">Date of birth</label>
            <br />
            <input
              v-model="user.birthday"
              class="form__input"
              type="date"
              required="required"
            />
          </form>
        </div>
      </form>
    </div>
    <button class="form__btn" @click="pushOneUser">Submit form</button>
  </div>
</template>

<script>
export default {
  name: "Form",
  data: () => ({
    user: {
      firstName: "",
      lastName: "",
      department: "",
      position: "",
      gender: "",
      birthday: "",
    },
  }),

  methods: {
    pushOneUser() {
      if (
        this.user.firstName.length == 0 ||
        this.user.lastName.length == 0 ||
        this.user.department.length == 0 ||
        this.user.position.length == 0 ||
        this.user.gender.length == 0 ||
        this.user.birthday.length == 0
      ) {
        console.log("ishla");
        alert("Bo'sh maydonlarni to'ldiring !!!");
        return false;
      } else {
        if (!this.$route.params.id) {
          this.$store.commit("PUSH_USER", this.user);
        } else {
          this.$store.commit("EDIT_ONE_USER", {
            user: this.user,
            index: this.$route.params.id,
          });
        }
      }
      this.$router.push("/students");
    },
  },
  created() {
    try {
      if (this.$route.params.id < this.$store.state.users.length) {
        this.user = this.$store.state.users[this.$route.params.id];
      }
    } catch (error) {
      // console.log(error);
      alert(Error);
    }
  },
};
</script>

<style lang="scss">
.form-user {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
  margin-top: 125px;
}

.form {
  &__lable {
    font-size: 16px;
    font-weight: bold;
    color: #252329;
    margin-bottom: 8px;
    display: inline-block;
  }

  &__input {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    text-transform: capitalize;
    outline: none;

    &::placeholder {
      font-size: 16px;
      color: #3d3d3d;
    }

    &:focus {
      box-shadow: 0 0 5px 4px #797979;
    }
  }

  .option {
    font-size: 16px;
    color: #252329;
    padding: 10px 0;
    display: inline-block;
    border: none;
  }

  .selected {
    background-color: #ccc;
    opacity: 0.7;
    color: #3d3d3d;
    font-weight: 550;
  }

  &__gender {
    display: flex;
    gap: 35px;
    margin-bottom: 25px;
  }

  &__radio-btn {
    margin-right: 8px;
  }

  &__btn {
    padding: 15px 30px;
    font-size: 16px;
    background-color: #6b705c;
    color: #fff;
    outline: none;
    border: 1px solid #6b705c;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s linear;
    margin-top: 30px;
    &:hover {
      background-color: #333d29;
      border-color: #333d29;
    }
  }
}

@media screen and (max-width: 576px) {
  .form-user {
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1fr;
  }
  .container {
    margin-bottom: 100px;
  }
}
</style>
