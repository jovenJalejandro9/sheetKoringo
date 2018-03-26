function err(code, errMsg) {
  const error = {errors: {code: code, message: errMsg}}
  return error
}

module.exports = {
  noToken: () => err(1, 'Incorrect token'),
  noIdFound: () => err(1, 'The field does not exist'),
  noInfoCreateUser: () => err(3, 'A new user need at least the fields name, firstSurname, secondSurname, tel and address'),
  noUsers: () => err(4, 'There are not users in the DB'),
  noIdAttr: () => err(5, 'There is not element with this attribute'),
  nullParam: () => err(6, 'There are null params'),
  incorrectPsw: () => err(7, 'Incorrect password'),
  incorrectRole: () => err(8, 'Incorrect Role'),
  noId: () => err(9, 'The id is charged automatically'),
  noPrivileges: () => err(10, 'The user do not have the privileges'),
  noUserHeader: () => err(11, 'There is not user in the header'),

  noInfoCreateSheet: () => err(12, 'A new sheet need at least the fields name, firstSurname, secondSurname, tel and address'),
  noSheets: () => err(13, 'There are not Sheet in the DB'),
  noSheetId: () => err(14, 'There is not Sheet with this id')

}
