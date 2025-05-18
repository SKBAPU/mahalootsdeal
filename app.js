const container = document.getElementById('product-list');
// const jsonUrl = 'https://rss.app/feeds/v1.1/YUgsJmQ6aEnIydk6.json';

fetch(jsonUrl)
  .then(res => res.json())
  .then(data => {
    container.innerHTML = '';

    data.items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'product';

      // ✅ Get first image from content_html
      const htmlContent = item.content || item.description || '';
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlContent;

      const imgTag = tempDiv.querySelector('img');
      const imageUrl = imgTag ? imgTag.src : null;

      div.innerHTML = `
        <h3>${item.title}</h3>
        ${imageUrl ? `<img src="${imageUrl}" alt="Product Image" class="product-image">` : ''}
        <p>${item.description || 'No description available.'}</p>
        <a href="${item.link}" target="_blank">📲 View on Telegram</a>
      `;
      container.appendChild(div);
    });
    
   


    if (data.items.length === 0) {
      container.innerHTML = '<p>No products found yet.</p>';
    }
  })
  .catch(err => {
    container.innerHTML = '<p style="color:red;">Failed to load products.</p>';
    console.error('Error loading feed:', err);
  });
const htmlContent = item.content || item['content:encoded'] || item.description || '';
const tempDiv = document.createElement('div');
tempDiv.innerHTML = htmlContent;
const imgTag = tempDiv.querySelector('img');

const imageUrl =
  item.enclosure?.url ||
  item['media:content']?.url ||
  (imgTag ? imgTag.src : null);

console.log("✅ Final Image URL:", imageUrl);

