/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const emailsObj = emails.map((email) => {
    const arr = email.split('@');
    let localName = arr[0];
    const domainName = arr[1];
    localName = arr[0].split('+')[0];
    localName = localName.replaceAll('.', '');
    return { localName, domainName };
  });
  console.log(emailsObj);
  const emailsArr = emailsObj.map(
    (email) => `${email.localName}@${email.domainName}`
  );
  console.log(emailsArr);
  const unq = [...new Set(emailsArr)];
  return unq.length;
};
