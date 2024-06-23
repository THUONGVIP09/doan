function searchServices() {
    var query = document.getElementById('searchInput').value.toLowerCase();
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
        var cards = section.querySelectorAll('.card');
        cards.forEach(function(card) {
            if (card.innerText.toLowerCase().includes(query)) {
                section.style.display = 'block';
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

function openServiceDetail(serviceId) {
    var modal = document.getElementById("serviceDetailModal");
    var modalContent = document.getElementById("modalContent");

    var serviceDetails = {
        "hotel1": {
            "name": "Khách sạn Mường Thanh",
            "description": "Khách sạn Mường Thanh được công nhận là Chuỗi khách sạn tư nhân lớn nhất Đông Dương với 60 khách sạn cao cấp đạt chuẩn quốc tế trải dài trên 33 tỉnh thành tại Việt Nam và nước bạn Lào.",
            "reviews": [
                { "user": "Nguyen Van An", "rating": 5, "comment": "Rất tốt, dịch vụ tuyệt vời!" },
                { "user": "Tran Thi Be", "rating": 4, "comment": "Khá ổn, giá cả hợp lý." }
            ]
        },
        "hotel2": {
            "name": "Yarra Ocean Suites Danang",
            "description": "Yarra Ocean Suites Danang với không gian thoải mái, giá cả phải chăng, phù hợp cho mọi du khách. Sự giao thoa kết nối không ngừng của sự tinh tế hiện đại và tiện dụng, gắn liền với đường biển miên man Mỹ Khê.",
            "reviews": [
                { "user": "Le Van Canh", "rating": 3, "comment": "Phòng hơi nhỏ nhưng dịch vụ tốt." },
                { "user": "Pham Thi Dinh", "rating": 4, "comment": "Nhân viên thân thiện, sạch sẽ." }
            ]
        },
        "car-rental1": {
            "name": "Thuê Xe Tự Lái tại Đà Nẵng - Da Nang Travel Car",
            "description": "Thuê Xe Tự Lái tại Đà Nẵng - Da Nang Travel Car, khách hàng sẽ nhận được những dịch vụ tốt nhất. Bởi vì chúng tôi luôn đặt quyền lợi cao nhất cho khách hàng là trên hết.",
            "reviews": [
                { "user": "Nguyen Hao", "rating": 4, "comment": "Tốt, dịch vụ tuyệt vời!" },
                { "user": "Tran Thi Be", "rating": 4, "comment": "Khá ổn, giá cả hợp lý." },
                { "user": "Tran Le", "rating": 5, "comment": "OK, giá cả hợp lý." }
            ]
        },
        "tour-guide1": {
            "name": "Hướng dẫn viên Home",
            "description": "Hướng dẫn viên Home là người đồng hành và chăm sóc khách du lịch trong toàn bộ chuyến đi, lên kế hoạch di chuyển và tập trung, làm thủ tục khách sạn cũng như mua vé vào cửa cho các điểm tham quan.",
            "reviews": [
                { "user": "Jasson", "rating": 5, "comment": "Very good, dịch vụ tốt." },
                { "user": "Nguyen Lam", "rating": 5, "comment": "Nhân viên thân thiện, sạch sẽ." }
            ]
        },
        "medical.jpg": {
            "name": "Bệnh viện Đa Khoa Đà Nẵng",
            "description": "Bệnh viện Đa Khoa Đà Nẵng đến với chúng tôi, khách hàng sẽ nhận được những dịch vụ tốt nhất. Bởi vì chúng tôi luôn đặt quyền lợi cao nhất cho khách hàng là trên hết.",
            "reviews": [
                { "user": "Nguyen Hao", "rating": 4, "comment": "Tốt, dịch vụ tuyệt vời!" },
                { "user": "Tran Thi Be", "rating": 4, "comment": "Khá ổn, giá cả hợp lý." },
                { "user": "Tran Le", "rating": 5, "comment": "OK, giá cả hợp lý." }
            ]
        },
        "bank": {
            "name": "ATM Ngân hàng Quốc tế - VIB Cẩm Lệ",
            "description": "ATM Ngân hàng Quốc tế - VIB Cẩm Lệ là người đồng hành và chăm sóc khách du lịch trong toàn bộ chuyến đi, lên kế hoạch di chuyển và tập trung, làm thủ tục khách sạn cũng như mua vé vào cửa cho các điểm tham quan.",
            "reviews": [
                { "user": "Jasson", "rating": 5, "comment": "Very good, dịch vụ tốt." },
                { "user": "Nguyen Lam", "rating": 5, "comment": "Nhân viên thân thiện, sạch sẽ." }
            ]
        }
    };

    var service = serviceDetails[serviceId];
    modalContent.innerHTML = `
        <h2>${service.name}</h2>
        <p>${service.description}</p>
        <h3>Đánh giá:</h3>
        <ul>
            ${service.reviews.map(review => `<li>${review.user}: ${review.rating} sao - ${review.comment}</li>`).join('')}
        </ul>
        <form id="reviewForm">
            <label for="userName">Tên của bạn</label>
            <input type="text" id="userName" name="userName" required>
            <label for="rating">Đánh giá</label>
            <input type="number" id="rating" name="rating" min="1" max="5" required>
            <label for="comment">Nhận xét</label>
            <textarea id="comment" name="comment" rows="4" required></textarea>
            <button type="button" onclick="submitReview('${serviceId}')">Gửi</button>
        </form>
    `;

    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("serviceDetailModal");
    modal.style.display = "none";
}

function submitReview(serviceId) {
    var userName = document.getElementById("userName").value;
    var rating = document.getElementById("rating").value;
    var comment = document.getElementById("comment").value;

    if(userName && rating && comment) {
        alert('Cảm ơn bạn đã đánh giá!');
        closeModal();
    } else {
        alert('Vui lòng điền đầy đủ thông tin!');
    }
}
window.onclick = function(event) {
    var modal = document.getElementById("serviceDetailModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
