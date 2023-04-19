import { defineStore } from "pinia";

export const useSearch = defineStore("search", {
  state: () => ({
    address: "",
    addressList: [],
    latitude: 0,
    longitude: 0,
  }),
  getters: {
    getAddress(state) {
      return state.address;
    },
    getAddressList(state) {
      return state.addressList;
    },
    getLatitude(state) {
      return state.latitude;
    },
    getLongitude(state) {
      return state.longitude;
    },
  },
  actions: {
    setAddress(val) {
      this.address = val;
    },
    setLocation() {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          var crd = pos.coords;
          this.latitude = crd.latitude;
          this.longitude = crd.longitude;
        },
        (err) => {
          console.warn("ERROR(" + err.code + "): " + err.message);
        },
        options
      );
    },
    setAddressListClear(val) {
      this.addressList = [];
    },
    setAddressListPush(val) {
      this.addressList.push(val);
    },
  },
});
