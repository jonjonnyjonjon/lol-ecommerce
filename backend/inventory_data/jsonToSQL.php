<?php
    try {
        $connect=new PDO('mongodb+srv://jon:123@cluster0.jzhsm.mongodb.net/lol-ecommerce');
        $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $sql = "INSERT INTO inventory (product_id,product_name,description,price,img_url,stock,reserved) values(:product_id,:product_name,:description,:price,:img_url,:stock,:reserved)";
        $stmt=$connect->prepare($sql);
        $filename= "item.json";
        // local file or read from url?
        $data=file_get_contents($filename);
        $array=json_decode($data,true);

        $stmt->bindParam(':product_id', $product_id);
        $stmt->bindParam(':product_name', $product_name);
        $stmt->bindParam(':description', $description);
        $stmt->bindParam(':price', $price);
        $stmt->bindParam(':img_url', $img_url);
        $stmt->bindParam(':stock', $stock);
        $stmt->bindParam(':reserved', $reserved);

        // $patterns = ["/<mainText>/", "/<\/mainText>/", "/<stats>/", "/<\/stats>/", "/<attention>/", "/<\/attention>/", "/<br>/"];
        foreach($array["data"] as $pid => $info){
            $product_id = $pid;
            $product_name = $info['name'];
            $description = preg_replace($patterns, "", $info['description']);
            $price = $info['gold']['base'] / 100;
            $img_url = "http://ddragon.leagueoflegends.com/cdn/11.6.1/img/item/" . $info['image']['full'];
            $stock = 100;
            $reserved = 0;
            $stmt->execute();
        }
    } // Added this brace to close the 'try' opening brace
    catch(PDOException $e) {
        echo "Error: " . $e->getMessage();
    }


?>