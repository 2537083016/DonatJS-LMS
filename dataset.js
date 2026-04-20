const pages = {

  // Di dalam pages di dataset.js
  home: [
        {
            section: 'hero',
            title: 'Fullstack Web Development<br>with DonatJS MVC',
            tagline: 'Membangun Masa Depan Web yang Ringan & Efisien',
            description: 'Program intensif yang dirancang untuk mencetak Web Developer profesional dengan penguasaan arsitektur minimalis, zero-dependency, dan performa tinggi.',
            imgClass: 'di-sls',
            badges: ['Batch 1 - 2026', 'Level: Intermediate', 'Metode: Project-Based Learning'],
            cta: { text: 'Mulai Belajar Sekarang &raquo;', link: 'learn' }
        },

        {
            section: 'features',
            items: [
                {
                    icon: 'di-person',
                    title: 'Target Peserta',
                    content: 'Mahasiswa Informatika, Web Developer junior, atau akademisi yang ingin mendalami **Clean Code** dan arsitektur framework mandiri.',
                    linkText: '+ Prasyarat',
                    linkTarget: 'home/visi'
                },
                {
                    icon: 'di-save',
                    title: 'Kurikulum Unggulan',
                    content: 'Kurikulum mencakup: Dasar JavaScript Modern, Arsitektur MVC, Keamanan Web (OWASP), hingga Deployment Static-First.',
                    linkText: '+ Lihat Silabus',
                    linkTarget: 'learn'
                },
                {
                    icon: 'di-setting',
                    title: 'Output Kursus',
                    content: 'Peserta akan memiliki portofolio aplikasi web nyata, sertifikat kompetensi BNSP (via asesmen), dan akses ke komunitas pengembang.',
                    linkText: '+ Detail Output',
                    linkTarget: 'home/biografi'
                }
            ]
        },

        {
            section: 'article',
            title: 'Informasi Akademik',
            layout: 'split',
            leftCol: {
                subtitle: 'Struktur Kurikulum',
                lines: [
                    '### Capaian Pembelajaran',
                    '1. Memahami filosofi **Minimal Web Infrastructure**.',
                    '2. Mampu membangun framework MVC dari nol.',
                    '3. Mengimplementasikan liveness detection (OpenCV/MediaPipe) di web.',
                    '---',
                    '### Jadwal Kelas',
                    '**Sesi Sinkronus:** Setiap Sabtu, 09.00 - 12.00 WIB',
                    '**Mentoring Mandiri:** Akses portal 24/7 melalui piawai.id.',
                    'link:Lihat Detail Kurikulum:home/visi'
                ]
            },
            rightCol: {
                subtitle: 'Profil Pengampu',
                lines: [
                    'Kursus ini dipandu langsung oleh:',
                    '**Wawan Sismadi, S.Kom., M.Kom.**',
                    '---',
                    'Dosen Tetap Universitas IPWIJA dan PhD Candidate di Universitas Ahmad Dahlan (UAD). Pendiri PT Sismadi Langit Solusi dan kreator **DonatJS**.',
                    '&bull; **Keahlian:** Software Architecture, Cybersecurity, IoT.',
                    '&bull; **SINTA ID:** 6848496 (Score: 259).',
                    '&bull; **Visi:** Menjembatani riset akademis dengan kebutuhan praktis industri.',
                    '---',
                    'link:Lihat Portofolio Lengkap:expertise'
                ]
            }
        },

// --- SUB-PAGE: BIOGRAFI PENGAMPU (?home/biografi) ---
        {
          id: 'biografi',
          section: 'article',
          layout: 'split',
          leftCol: {
              subtitle: 'Wawan Sismadi, S.Kom., M.Kom.',
              lines: [
                  '### Scholar-Entrepreneur',
                  'badge:Dosen Tetap IPWIJA',
                  'badge:PhD Candidate UAD',
                  '---',
                  'fokus pada penjembatanan antara riset akademis dan kebutuhan industri teknologi informasi.',
                  'link:Kembali ke Home:home'
              ]
          },
          rightCol: {
              subtitle: 'Latar Belakang',
              lines: [
                  'Sebagai Founder **PT Sismadi Langit Solusi**, beliau aktif mengembangkan solusi digital yang efisien.',
                  'table:[{"Sektor":"Pendidikan","Peran":"Dosen & Peneliti"},{"Sektor":"Industri","Peran":"Solution Architect"},{"Sektor":"Sertifikasi","Peran":"Asesor BNSP IT"}]',
                  '---',
                  'SINTA ID: 6848496'
              ]
          }
      },

      // --- SUB-PAGE: VISI TEKNOLOGI (?home/visi) ---
      {
          id: 'visi',
          section: 'article',
          layout: 'split',
          leftCol: {
              subtitle: 'Minimal Web Infrastructure',
              lines: [
                  '### Mengapa Zero-Dependency?',
                  'Di era modern, ketergantungan pada library pihak ketiga seringkali membuat aplikasi menjadi "gemuk" dan rentan keamanan.',
                  '---',
                  'link:Kembali ke Home:home'
              ]
          },
          rightCol: {
              subtitle: 'Pilar Utama',
              lines: [
                  'step:01:Efisiensi:Resource yang kecil berarti load time yang instan.',
                  'step:02:Keamanan:Meminimalisir celah dari library eksternal yang tidak terverifikasi.',
                  'step:03:Kemandirian:Memahami setiap baris kode yang ditulis (Clean Code).',
                  '---',
                  'Prinsip ini diterapkan sepenuhnya dalam pengembangan **DonatJS**.'
              ]
          }
      }

    ],


  learn: {
          categories: [
              {
                  name: 'Frontend Development',
                  items: [
                      {
                          id: 'intro-js',
                          title: 'Dasar JavaScript Modern',
                          lines: [
                              'JavaScript adalah bahasa pemrograman utama web.',
                              '---',
                              '### Materi Utama',
                              '1. Variabel (let, const)',
                              '2. Arrow Functions',
                              '3. DOM Manipulation dasar'
                          ]
                      },

                      {
                          id: 'modul02',
                          title: 'Modul2',
                          lines: [
                              'JavaScript adalah bahasa pemrograman utama web.',
                              '---',
                              '### Materi Utama',
                              '1. Variabel (let, const)',
                              '2. Arrow Functions',
                              '3. DOM Manipulation dasar'
                          ]
                      },

                      {
                          id: 'modul-04',
                          title: 'Pertemuan 4: Manipulasi Layout & Komponen',
                          lines: [
                              '**Pertemuan 4: Manipulasi Layout & Komponen Antarmuka Dinamis**',
                              'Komponen yang baik terasa invisible — pengguna fokus pada konten, bukan cara menggunakannya.',
                              'Mempelajari teknik manipulasi visual untuk mendukung alur kerja CRUD. Fokus pada Modal (jendela edit), Toast Notification (umpan balik aksi), dan transisi CSS yang membuat UI terasa profesional.',
                              '---',
                              '### Mengapa Kita Butuh Komponen-Komponen Ini?',
                              'card:Modal = Edit Tanpa Pindah Halaman:Tanpa modal, proses edit harus membuka halaman baru atau mengisi ulang form di tempat berbeda. Modal mempertahankan konteks pengguna — ia tetap \'di dalam\' tabel saat mengedit.',
                              'card:Toast = Konfirmasi yang Tidak Mengganggu:Browser alert() memblokir seluruh interaksi sampai di-klik. Toast muncul di pojok layar, memberi tahu pengguna, lalu menghilang sendiri. Standar UX modern.',
                              '---',
                              '### Target Capaian Praktikum',
                              'skill:84%:HTML struktur modal lengkap dengan ID sistematis,Wajib',
                              'skill:84%:CSS modal overlay dengan opacity transition,Animasi CSS',
                              'skill:84%:CSS toast notification dengan auto-hide concept,UX Modern',
                              'skill:84%:Responsivitas modal menggunakan min(),Mobile-Safe',
                              '---',
                              '### Aktivitas Praktikum',
                              'table:[{"Aktivitas": "Buat Struktur Modal", "Detail Tugas": "Susun HTML modal form edit. Verifikasi semua ID input di modal tidak bentrok dengan ID form utama."}, {"Aktivitas": "CSS Overlay Effect", "Detail Tugas": "Implementasi opacity transition dan pointer-events. Test dengan menambah class \'active\' manual di DevTools."}, {"Aktivitas": "Styling Toast", "Detail Tugas": "Desain toast di pojok kanan bawah. Buat dua variant: .success (hijau) dan .error (merah)."}, {"Aktivitas": "Uji Visual", "Detail Tugas": "Toggle class \'active\' pada modal dan \'show\' pada toast via DevTools Console. Konfirmasi animasi berjalan mulus."}]'
                          ]
                      }
                  ]
              }
          ]
      },


      learn: {
          categories: [
              {
                  name: 'Bagian 1: Fondasi & Arsitektur',
                  items: [
                      {
                          id: 'intro-js',
                          title: 'Pertemuan 1: Dasar JavaScript Modern',
                          lines: [
                              'JavaScript adalah motor utama di balik **DonatJS**. Kita akan fokus pada sintaks modern yang efisien.',
                              '---',
                              '### Materi Utama',
                              '1. **Variabel & Scope**: Perbedaan mendalam `let` vs `const`.',
                              '2. **Arrow Functions**: Penulisan fungsi yang ringkas untuk callback.',
                              '3. **DOM Manipulation**: Cara DonatJS berinteraksi dengan elemen HTML tanpa library luar.',
                              '---',
                              'skill:100%:Memahami ES6+ Syntax,Wajib',
                              'skill:100%:Event Listener Handling,Dasar'
                          ]
                      },
                      {
                          id: 'modul-02',
                          title: 'Pertemuan 2: Arsitektur MVC & Routing',
                          lines: [
                              'Mengenal pola **Model-View-Controller** yang digunakan dalam DonatJS untuk memisahkan data dan tampilan.',
                              '---',
                              '### Materi Utama',
                              '1. **Folder Structure**: Organisasi file di DonatJS.',
                              '2. **State Management**: Bagaimana data dikelola di `dataset.js`.',
                              '3. **Hash-based Routing**: Navigasi SPA (Single Page Application) tanpa reload.',
                              '---',
                              'step:2026:Arsitektur:Memahami alur data dari Dataset ke UI'
                          ]
                      }
                  ]
              },
              {
                  name: 'Bagian 2: UI & UX Implementation',
                  items: [
                      {
                          id: 'modul-04',
                          title: 'Pertemuan 4: Manipulasi Layout & Komponen',
                          lines: [
                              '**Manipulasi Layout & Komponen Antarmuka Dinamis**',
                              'Komponen yang baik terasa *invisible* — pengguna fokus pada konten, bukan cara menggunakannya.',
                              'Mempelajari teknik manipulasi visual untuk mendukung alur kerja CRUD. Fokus pada Modal, Toast Notification, dan transisi CSS.',
                              '---',
                              '### Mengapa Kita Butuh Komponen Ini?',
                              'card:Modal = Edit Tanpa Pindah Halaman:Mempertahankan konteks pengguna saat melakukan perubahan data.',
                              'card:Toast = Konfirmasi Real-time:Memberikan umpan balik aksi (sukses/gagal) secara elegan tanpa memblokir interaksi.',
                              '---',
                              '### Target Capaian Praktikum',
                              'skill:84%:HTML struktur modal dengan ID sistematis,Wajib',
                              'skill:84%:CSS modal overlay dengan opacity transition,Animasi',
                              'skill:84%:CSS toast dengan auto-hide concept,UX Modern',
                              'skill:84%:Responsivitas modal menggunakan min(),Mobile-Safe',
                              '---',
                              '### Aktivitas Praktikum',
                              'table:[{"Aktivitas": "Struktur Modal", "Detail Tugas": "Susun HTML modal form edit. Verifikasi ID input."}, {"Aktivitas": "CSS Overlay", "Detail Tugas": "Implementasi opacity transition dan pointer-events."}, {"Aktivitas": "Styling Toast", "Detail Tugas": "Desain toast .success (hijau) dan .error (merah)."}, {"Aktivitas": "Uji Visual", "Detail Tugas": "Toggle class via DevTools Console untuk cek animasi."}]'
                          ]
                      }
                  ]
              }
          ]
      },


exam: [
      {
          section: 'titleHero',
          title: 'Evaluasi Kompetensi:<br>DonatJS & Web Architecture'
      },
      {
          section: 'article',
          layout: 'split',
          leftCol: {
              subtitle: 'Informasi Ujian',
              lines: [
                  '**Status:** Tersedia (Batch 1)',
                  '**Durasi:** 30 Menit',
                  '**Passing Grade:** 80%',
                  '---',
                  '### Instruksi:',
                  '1. Masukkan kata sandi yang telah dibagikan melalui grup kelas.',
                  '2. Pastikan koneksi stabil; skor akan langsung dienkripsi setelah submit.',
                  '3. Sertifikat digital akan diterbitkan otomatis jika Anda lulus.'
              ]
          },
          rightCol: {
              subtitle: 'Akses Ujian',
              lines: ['form:quiz'], // Trigger engine quiz di script.js
              startTime: '2026-04-19T08:00:00',
              password: 'SLS2026',
              questions: [
                  {
                      q: 'Apa filosofi utama di balik penggunaan DonatJS dalam pengembangan web?',
                      options: [
                          'Mengandalkan banyak library pihak ketiga',
                          'Minimal Web Infrastructure & Zero-dependency',
                          'Hanya berjalan di sistem operasi tertentu'
                      ],
                      ans: btoa('Minimal Web Infrastructure & Zero-dependency')
                  },
                  {
                      q: 'Dalam arsitektur MVC DonatJS, di mana kita mendefinisikan struktur data halaman?',
                      options: ['index.html', 'style.css', 'dataset.js'],
                      ans: btoa('dataset.js')
                  },
                  {
                      q: 'Manakah fitur CSS yang digunakan untuk membuat modal responsif di modul 4?',
                      options: ['Fungsi min()', 'Float left', 'Table-layout'],
                      ans: btoa('Fungsi min()')
                  },
                  {
                      q: 'Teknologi apa yang direkomendasikan pengampu untuk implementasi face recognition offline?',
                      options: ['Flash Player', 'OpenCV.js / MediaPipe', 'Java Applet'],
                      ans: btoa('OpenCV.js / MediaPipe')
                  },
                  {
                      q: 'Apa fungsi utama dari komponen "Toast" dalam UX modern?',
                      options: [
                          'Memblokir interaksi pengguna sampai diklik',
                          'Memberikan feedback non-intrusif (auto-hide)',
                          'Menghapus seluruh database secara permanen'
                      ],
                      ans: btoa('Memberikan feedback non-intrusif (auto-hide)')
                  }
              ]
          }
      }
  ],

       'certificates': {
      'SLS-2026-001': {
            name: 'Wawan Sismadi',
            exam: 'Fundamental Cybersecurity',
            score: '98/100',
            date: '19 April 2026'
        },

        'SLS-2026-002': {
            name: 'Budi Santoso',
            exam: 'Fundamental Cybersecurity',
            score: '95/100',
            date: '19 April 2026'
        },
        'SLS-2026-003': {
            name: 'Ani Wijaya',
            exam: 'Web Development with DonatJS',
            score: '100/100',
            date: '20 April 2026'
        }
    },

    'order': [
        { section: 'titleHero', title: 'Verifikasi Sertifikat' },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Cek Kredensial',
                lines: [
                    'Gunakan form di samping untuk melakukan validasi sertifikat pelatihan.',
                    '---',
                    '### Mengapa Verifikasi?',
                    'Menjamin keaslian dokumen yang diterbitkan oleh PT SLS.'
                ]
            },
            rightCol: {
                subtitle: 'Validasi',
                lines: ['form:validate-cert'] // Memicu input kredensial
            }
        }
    ],


};





  // http://localhost/sb/sb/?cert/SLS-2026-001
