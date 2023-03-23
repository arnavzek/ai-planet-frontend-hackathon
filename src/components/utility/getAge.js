export default function getAge(uploadTime) {
  let dob = uploadTime;
  dob = new Date(dob);

  let today = new Date();

  let seconds = today.valueOf() / 1000 - dob.valueOf() / 1000;

  if (seconds < 60) return `Uploaded just now`;

  let mins = Math.round(seconds / 60);
  if (mins < 60) return `Uploaded ${mins} minutes ago`;

  let hours = Math.round(mins / 60);
  if (hours < 24) return `Uploaded ${hours} hours ago`;

  let days = Math.round(hours / 24);
  return `Uploaded ${days} hours ago`;
}
