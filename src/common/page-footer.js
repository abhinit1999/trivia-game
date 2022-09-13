import "./page-footer.css";

function PageFooter() {
  const year = new Date().getFullYear();
  return <footer className="page-footer">Developed By Abhinit Kumar, {year}</footer>;
}

export default PageFooter;
