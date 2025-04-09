function toggleProject(projectElement) {
    const details = projectElement.querySelector('.details');
    const allDetails = document.querySelectorAll('.project .details');
  
    allDetails.forEach(d => {
      if (d !== details) d.style.display = 'none';
    });
  
    details.style.display = (details.style.display === 'block') ? 'none' : 'block';
  }  
