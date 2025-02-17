const listContacts = require("./contacts/listContacts");
const getContactById = require("./contacts/getContactById");
const addContact = require("./contacts/addContact");
const deleteContact = require("./contacts/deleteContact");
const updateContact = require("./contacts/updateContact");
const updateStatusContact = require("./contacts/updateStatusContact");
const register = require("./auth/register");
const login = require("./auth/login");
const getCurrent = require("./auth/getCurrent");
const logout = require("./auth/logout");
const updateSubscription = require("./auth/updateSubscription");
const updateAvatar = require("./auth/updateAvatar");
const verifyEmail = require("./auth/verifyEmail");
const resentVerifyEmail = require("./auth/resentVerifyEmail");

const ctrlWrapper = require("../helpers/ctrlWrapper");

module.exports = {
  register: ctrlWrapper(register),
  verifyEmail: ctrlWrapper(verifyEmail),
  resentVerifyEmail: ctrlWrapper(resentVerifyEmail),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateSubscription: ctrlWrapper(updateSubscription),
  updateAvatar: ctrlWrapper(updateAvatar),
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  addContact: ctrlWrapper(addContact),
  deleteContact: ctrlWrapper(deleteContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
