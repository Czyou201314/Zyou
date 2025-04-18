<?php
define('SELF', pathinfo(__file__, PATHINFO_BASENAME));
// 网站根目录
define('FCPATH', str_replace("\\", "/", str_replace(SELF, '', __file__)));
//加载配置文件
define('VERSION_UP', file_get_contents('https://update.seakee.cn/updata.txt'));
require_once FCPATH . 'config.php';
class Unzip
{
		public function unzip($src_file, $dest_dir = false, $create_zip_name_dir = true, $overwrite = true)
		{
				if ($zip = zip_open($src_file))
				{
						if ($zip)
						{
								$splitter = $create_zip_name_dir === true ? "." : "/";
								if ($dest_dir === false)
								{
										$dest_dir = substr($src_file, 0, strrpos($src_file, $splitter)) . "/";
								}
								// 如果不存在 创建目标解压目录
								$this->create_dirs($dest_dir);
								// 对每个文件进行解压
								while ($zip_entry = zip_read($zip))
								{
										// 文件不在根目录
										$pos_last_slash = strrpos(zip_entry_name($zip_entry), "/");
										if ($pos_last_slash !== false)
										{
												// 创建目录 在末尾带 /
												$this->create_dirs($dest_dir . substr(zip_entry_name($zip_entry), 0, $pos_last_slash + 1));
										}
										// 打开包
										if (zip_entry_open($zip, $zip_entry, "r"))
										{
												// 文件名保存在磁盘上
												$file_name = $dest_dir . zip_entry_name($zip_entry);
												// 检查文件是否需要重写
												if ($overwrite === true || $overwrite === false && !is_file($file_name))
												{
														// 读取压缩文件的内容
														$fstream = zip_entry_read($zip_entry, zip_entry_filesize($zip_entry));
														// $file_name=str_replace('/lequgirl/lequgirl','',$file_name);
														@file_put_contents($file_name, $fstream);
														// 设置权限
														chmod($file_name, 0777);
														//	 echo "save: ".$file_name."<br />";
												}
												// 关闭入口
												zip_entry_close($zip_entry);
										}
								}
								// 关闭压缩包
								zip_close($zip);
						}
				}
				else
				{
						return false;
				}
				return true;
		}
		public function create_dirs($path)
		{
				if (!is_dir($path))
				{
						$directory_path = "";
						$directories = explode("/", $path);
						array_pop($directories);
						foreach ($directories as $directory)
						{
								$directory_path .= $directory . "/";
								if (!is_dir($directory_path))
								{
										mkdir($directory_path);
										chmod($directory_path, 0777);
								}
						}
				}
		}
}
class getFile
{
		public function get($url, $save_dir = '', $filename = '', $type = 0)
		{
				if (trim($url) == '')
				{
						return false;
				}
				if (trim($save_dir) == '')
				{
						$save_dir = './';
				}
				if (0 !== strrpos($save_dir, '/'))
				{
						$save_dir .= '/';
				}
				if (!file_exists($save_dir) && !mkdir($save_dir, 0777, true))
				{
						return false;
				}
				if ($type)
				{
						$ch = curl_init();
						$timeout = 30;
						curl_setopt($ch, CURLOPT_URL, $url);
						curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
						curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
						curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
						curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
						$content = curl_exec($ch);
						curl_close($ch);
				}
				else
				{
						ob_start();
						readfile($url);
						$content = ob_get_contents();
						ob_end_clean();
				}
				$size = strlen($content);
				$fp2 = @fopen($save_dir . $filename, 'a');
				fwrite($fp2, $content);
				fclose($fp2);
				unset($content, $url);
				return array(
						'file_name' => $filename,
						'save_path' => $save_dir . $filename,
						'file_size' => $size);
		}
}
if (strcasecmp(VERSION, VERSION_UP) < 0)
{
		$a = new getFile();
		$z = new Unzip();
		$path = FCPATH . 'bak/' . VERSION_UP . '.zip';
		$updata_a = file_get_contents('user.php');
		$updata_a_yb = $updata_a;
		preg_match('/array[\s\S]*?\)/i', $updata_a, $updata_a_data);
		preg_match('|\'updata(.*?)|U', $updata_a, $yptk);
		$panduan = '0';
		if (!file_exists($path))
		{
				echo "<h1>在线升级进行中【文件升级】,请稍后......</h1><textarea rows=\"25\" style=\"width: 300px; height:  300px;\"  readonly>正在下载升级文件包...\n";
				sleep(2);
				$a->get('https://update.seakee.cn/8090.zip', 'bak', VERSION_UP . '.zip', 1);
				ob_flush();
				flush();
				echo "下载升级包完毕...\n";
				sleep(2);
		}
		if (file_exists($path))
		{
				echo "正在处理升级包的文件...\n\n";
				sleep(2);
				ob_flush();
				flush();
				$result = $z->unzip($path, FCPATH, false, true);
				if ($result != 1)
				{
						echo "文件 $path 错误...\n";
						ob_flush();
						flush();
						sleep(2);
				}
				else
				{
						$updata_b = file_get_contents('user.php');
						preg_match('/array[\s\S]*?\)/i', $updata_b, $updata_b_data);
						preg_match_all('/\'(.*?)\'\s=>(.*?)\/\//i', $updata_b_data['0'], $ts_b);
						foreach (array_unique($ts_b['1']) as $i => $value)
						{
								if (strstr($updata_a_data['0'], "'".$value) == false)
								{
										$panduan = '1';
                                        echo "\n新增参数:".$value."\n";
										$ptk = "|'$value'(.*?)|U";
										preg_match($ptk, $updata_b, $ts_c);
                                        $cd=trim($ts_c['0']);
                                        $updata_a = str_replace($yptk['0'], $yptk['0'] . "\n\n" . "		$cd", $updata_a);
								}
						}
						if ($panduan == '1')
						{
								file_put_contents('user.php', $updata_a);
								print_r();
						}
						else
						{
								file_put_contents('user.php', $updata_a_yb);
						}
						echo "\n升级成功\n";
						ob_flush();
						flush();
						@unlink($path);
				}
		}
}
else
{
		exit('升级未能成功,可能您使用的是最新版本!');
}