import { reactive } from "vue";
import ApiService from "../apiURL";
export const customersData = reactive({
  list: await ApiService.getAllCustomers(),
  currentSearch: "",
  search(value) {
    this.currentSearch = value;
  },
  filter: "All members",
  changeFilter(value) {
    this.filter = value;
  },
});
