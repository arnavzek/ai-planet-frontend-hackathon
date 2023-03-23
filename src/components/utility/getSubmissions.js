export default function getSubmissions() {
  let submissions = localStorage.getItem("submissions");
  if (!submissions) {
    submissions = [];
  } else {
    try {
      submissions = JSON.parse(submissions);
      if (!Array.isArray(submissions)) submissions = [];
    } catch (e) {
      submissions = [];
    }
  }

  return submissions;
}
