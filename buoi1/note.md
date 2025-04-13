CRUD (create (post) , read (get) , update (put, patch), delete (delete) )

- get => lấy ra (tìm kiếm)
- post => tạo mới create => status (201: create successfully, 400: lỗi lúc thực thi, 500: chết server )
- put: update (200: thành công, 404: not found , 400: lỗi thực thi, 500 chết server) => update hết tất cả document
  -patch: update (200: thành công, 404: not found , 400: lỗi thực thi, 500 chết server) => update những data cần update (tối ưu performence)

* có bao giờ post dùng thay get hay không => có ( khi query quá dài và tìm kiếm thông qua body)
