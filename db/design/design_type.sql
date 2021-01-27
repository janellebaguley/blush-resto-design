insert into design(design_description,
image_url)
values(
    ${design_description},
    ${image_url}
)
returning design_id, design_description, image_url;