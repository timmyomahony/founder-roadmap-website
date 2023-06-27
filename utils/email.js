const getEmailAddress = () => {
  return atob("aGVsbG9AZm91bmRlcnJvYWRtYXAuY29t");
};

const sendEmail = () => {
  const address = getEmailAddress();
  if (typeof window === "undefined") {
    return;
  }
  window.location.href = `mailto:${address}?subject=Website Enquiry`;
};

export { getEmailAddress, sendEmail };
