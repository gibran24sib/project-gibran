// dentalAPI.js - VERSI REPLIKA TOTAL 100% MOCK LOCALSTORAGE SESUAI CODINGAN LAMA + EKSTENSI DATA LOYALITAS

// Fungsi pembantu manajemen data LocalStorage
const getStorageData = (key, defaultData = []) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultData;
};

const setStorageData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

// =====================================================
// SEEDER INITIAL DATA CONTOH AGAR DASHBOARD LANGSUNG RAMAI
// =====================================================
const initMockDatabase = () => {
    if (getStorageData('mock_users').length === 0) {
        setStorageData('mock_users', [
            { id: 1, username: "admin", password_hash: "admin123", full_name: "Admin Utama", email: "admin@dental.com", role: "super_admin", is_active: true },
            { id: 2, username: "gibran", password_hash: "gibran123", full_name: "Drg. Gibran Rakabuming", email: "gibran@dental.com", role: "dokter", is_active: true },
            { id: 3, username: "shinta", password_hash: "shinta123", full_name: "Drg. Shinta Amelia", email: "shinta@dental.com", role: "dokter", is_active: true }
        ]);
    }
    if (getStorageData('mock_patients').length === 0) {
        setStorageData('mock_patients', [
            { id: 1, rm_number: "RM-0001", full_name: "Budi Santoso", nik: "3171010101920001", phone: "081234567890", email: "budi@mail.com", gender: "L", birth_date: "1992-05-12", address: "Jl. Merdeka No. 10", is_active: true },
            { id: 2, rm_number: "RM-0002", full_name: "Siti Rahma", nik: "3171010101950002", phone: "089876543210", email: "siti@mail.com", gender: "P", birth_date: "1995-08-22", address: "Jl. Mawar No. 4B", is_active: true },
            { id: 3, rm_number: "RM-0003", full_name: "Andi Wijaya", nik: "3171010101880003", phone: "085611223344", email: "andi@mail.com", gender: "L", birth_date: "1988-12-05", address: "Jl. Sudirman Kav 21", is_active: true }
        ]);
    }
    if (getStorageData('mock_appointments').length === 0) {
        const todayStr = new Date().toISOString().split('T')[0];
        setStorageData('mock_appointments', [
            { id: 1, patient_id: 1, doctor_id: 2, appointment_date: todayStr, appointment_time: "09:00", status: "confirmed", notes: "Pembersihan karang gigi rutin" },
            { id: 2, patient_id: 2, doctor_id: 3, appointment_date: todayStr, appointment_time: "11:00", status: "pending", notes: "Konsultasi kawat gigi" },
            { id: 3, patient_id: 3, doctor_id: 2, appointment_date: todayStr, appointment_time: "14:00", status: "completed", notes: "Penambalan gigi geraham" }
        ]);
    }
    if (getStorageData('mock_treatments').length === 0) {
        setStorageData('mock_treatments', [
            { id: 1, code: "TRT-01", name: "Scaling (Pembersihan Karang)", category: "Umum", price: 250000, is_active: true },
            { id: 2, code: "TRT-02", name: "Tambal Gigi Komposit", category: "Konservasi", price: 350000, is_active: true }
        ]);
    }
    if (getStorageData('mock_invoices').length === 0) {
        setStorageData('mock_invoices', [
            { id: 1, invoice_number: "INV-001", appointment_id: 1, patient_id: 1, total_amount: 250000, discount_amount: 0, final_amount: 250000, status: "paid", created_at: new Date().toISOString() },
            { id: 2, invoice_number: "INV-002", appointment_id: 2, patient_id: 2, total_amount: 350000, discount_amount: 50000, final_amount: 300000, status: "unpaid", created_at: new Date().toISOString() }
        ]);
    }
    if (getStorageData('mock_inventory').length === 0) {
        setStorageData('mock_inventory', [
            { id: 1, code: "INV-01", name: "Masker Medis 3-Ply", category: "Alkes Disposable", stock: 150, min_stock: 20, unit: "Box", price: 45000 },
            { id: 2, code: "INV-02", name: "Sarung Tangan Latex S", category: "Alkes Disposable", stock: 8, min_stock: 10, unit: "Box", price: 65000 }
        ]);
    }
    if (getStorageData('mock_logs').length === 0) {
        setStorageData('mock_logs', [
            { id: 1, user_id: 1, action: "LOGIN", table_name: "users", record_id: 1, created_at: new Date().toISOString() },
            { id: 2, user_id: 1, action: "INSERT", table_name: "patients", record_id: 3, created_at: new Date().toISOString() }
        ]);
    }

    // --- TAMBAHAN DATA BARU UNTUK SEEDER MEMBER LOYALITAS & REWARDS ---
    if (getStorageData('mock_loyalty').length === 0) {
        setStorageData('mock_loyalty', [
            { id: 101, patient_id: 1, points: 200, points_type: 'earn', source_activity: 'Tindakan Tambal Gigi', created_at: "2026-05-10T10:00:00.000Z" },
            { id: 102, patient_id: 1, points: 200, points_type: 'earn', source_activity: 'Tindakan Scaling Gigi', created_at: "2026-06-01T09:00:00.000Z" },
            { id: 103, patient_id: 1, points: 50, points_type: 'redeem', reward_id: 1, created_at: "2026-06-15T11:00:00.000Z" },
            
            { id: 104, patient_id: 2, points: 150, points_type: 'earn', source_activity: 'Konsultasi Orthodonti', created_at: "2026-06-11T14:30:00.000Z" },
            
            { id: 105, patient_id: 3, points: 600, points_type: 'earn', source_activity: 'Paket Pemutihan Gigi (Bleaching)', created_at: "2026-06-05T16:00:00.000Z" },
            { id: 106, patient_id: 3, points: 50, points_type: 'redeem', reward_id: 1, created_at: "2026-06-20T10:00:00.000Z" }
        ]);
    }
    if (getStorageData('mock_rewards').length === 0) {
        setStorageData('mock_rewards', [
            { id: 1, name: "Pasta Gigi Sensodyne Pro 100gr", points_required: 50, stock: 24, is_active: true },
            { id: 2, name: "Sikat Gigi Bambu Eco-Friendly", points_required: 30, stock: 15, is_active: true },
            { id: 3, name: "Voucher Potongan Tindakan Rp 50.000", points_required: 120, stock: 99, is_active: true },
            { id: 4, name: "Free Voucher Scaling Karang Gigi", points_required: 300, stock: 8, is_active: true }
        ]);
    }
    if (getStorageData('mock_redemptions').length === 0) {
        setStorageData('mock_redemptions', [
            { id: 201, patient_id: 1, reward_id: 1, status: 'completed', created_at: "2026-06-15T11:00:00.000Z" },
            { id: 202, patient_id: 3, reward_id: 1, status: 'completed', created_at: "2026-06-20T10:00:00.000Z" },
            { id: 203, patient_id: 2, reward_id: 3, status: 'pending', created_at: "2026-06-22T08:15:00.000Z" }
        ]);
    }
    if (getStorageData('mock_promotions').length === 0) {
        setStorageData('mock_promotions', [
            { id: 301, name: "Diskon Member Baru Kece 10%", coupon_code: "DENTALBARU", discount_type: "percentage", discount_value: 10, is_active: true },
            { id: 302, name: "Promo Berkah Scaling Sehat", coupon_code: "BERSIH25", discount_type: "fixed", discount_value: 25000, is_active: true },
            { id: 303, name: "Kupon Spesial Grand Opening", coupon_code: "MEGA77", discount_type: "percentage", discount_value: 15, is_active: false }
        ]);
    }
};
initMockDatabase();

export const dentalAPI = {
    // 1. USERS
    users: {
        async getAll() { return getStorageData('mock_users'); },
        async getById(id) { return getStorageData('mock_users').find(u => u.id == id) || null; },
        async getByUsername(username) {
            return getStorageData('mock_users').find(u => u.username.toLowerCase() === username.toLowerCase()) || null;
        },
        async create(data) {
            const list = getStorageData('mock_users');
            const item = { id: Date.now(), ...data, is_active: true };
            list.push(item); setStorageData('mock_users', list); return [item];
        },
        async update(id, data) {
            const list = getStorageData('mock_users'); const idx = list.findIndex(u => u.id == id);
            if (idx !== -1) { list[idx] = { ...list[idx], ...data }; setStorageData('mock_users', list); return list[idx]; }
            return null;
        },
        async delete(id) {
            let list = getStorageData('mock_users').filter(u => u.id != id);
            setStorageData('mock_users', list); return { success: true };
        },
        async getAllDoctors() { return getStorageData('mock_users').filter(u => u.role === 'dokter'); },
        async getAllAdmins() { return getStorageData('mock_users').filter(u => u.role === 'admin' || u.role === 'super_admin'); }
    },

    // 2. PATIENTS
    patients: {
        async getAll() { return getStorageData('mock_patients'); },
        async getById(id) { return getStorageData('mock_patients').find(p => p.id == id) || null; },
        async getByRmNumber(rm) { return getStorageData('mock_patients').find(p => p.rm_number === rm) || null; },
        async getByNik(nik) { return getStorageData('mock_patients').find(p => p.nik === nik) || null; },
        async getByPhone(phone) { return getStorageData('mock_patients').find(p => p.phone === phone) || null; },
        async searchByName(name) { return getStorageData('mock_patients').filter(p => p.full_name.toLowerCase().includes(name.toLowerCase())); },
        async getActive() { return getStorageData('mock_patients').filter(p => p.is_active); },
        async create(data) {
            const list = getStorageData('mock_patients');
            const item = { id: Date.now(), rm_number: `RM-00${list.length + 1}`, ...data, is_active: true };
            list.push(item); setStorageData('mock_patients', list); return item;
        },
        async update(id, data) {
            const list = getStorageData('mock_patients'); const idx = list.findIndex(p => p.id == id);
            if (idx !== -1) { list[idx] = { ...list[idx], ...data }; setStorageData('mock_patients', list); return list[idx]; }
            return null;
        },
        async softDelete(id) { return this.update(id, { is_active: false }); },
        async hardDelete(id) {
            let list = getStorageData('mock_patients').filter(p => p.id != id);
            setStorageData('mock_patients', list); return { success: true };
        },
        async getBirthdayThisMonth() {
            const currentMonth = new Date().getMonth() + 1;
            return getStorageData('mock_patients').filter(p => p.birth_date && new Date(p.birth_date).getMonth() + 1 === currentMonth);
        }
    },

    // 3. PATIENT DOCUMENTS
    patientDocuments: {
        async getAll() { return getStorageData('mock_docs'); },
        async getByPatientId(pid) { return getStorageData('mock_docs').filter(d => d.patient_id == pid); },
        async getById(id) { return getStorageData('mock_docs').find(d => d.id == id) || null; },
        async create(data) {
            const list = getStorageData('mock_docs'); const item = { id: Date.now(), ...data };
            list.push(item); setStorageData('mock_docs', list); return item;
        },
        async update(id, data) {
            const list = getStorageData('mock_docs'); const idx = list.findIndex(d => d.id == id);
            if (idx !== -1) { list[idx] = { ...list[idx], ...data }; setStorageData('mock_docs', list); return list[idx]; }
            return null;
        },
        async delete(id) {
            let list = getStorageData('mock_docs').filter(d => d.id != id);
            setStorageData('mock_docs', list); return { success: true };
        },
        async getRontgenByPatientId(pid) { return getStorageData('mock_docs').filter(d => d.patient_id == pid && d.document_type === 'rontgen'); }
    },

    // 4. DOCTORS
    doctors: {
        async getAll() { return getStorageData('mock_doctors'); },
        async getById(id) { return getStorageData('mock_doctors').find(d => d.id == id) || null; },
        async getByUserId(uid) { return getStorageData('mock_doctors').find(d => d.user_id == uid) || null; },
        async getActive() { return getStorageData('mock_doctors').filter(d => d.is_active); },
        async getBySpecialization(spec) { return getStorageData('mock_doctors').filter(d => d.specialization === spec); },
        async create(data) {
            const list = getStorageData('mock_doctors'); const item = { id: Date.now(), ...data, is_active: true };
            list.push(item); setStorageData('mock_doctors', list); return item;
        },
        async update(id, data) {
            const list = getStorageData('mock_doctors'); const idx = list.findIndex(d => d.id == id);
            if (idx !== -1) { list[idx] = { ...list[idx], ...data }; setStorageData('mock_doctors', list); return list[idx]; }
            return null;
        },
        async delete(id) {
            let list = getStorageData('mock_doctors').filter(d => d.id != id);
            setStorageData('mock_doctors', list); return { success: true };
        }
    },

    // 5. DOCTOR SCHEDULES
    doctorSchedules: {
        async getAll() { return getStorageData('mock_schedules'); },
        async getById(id) { return getStorageData('mock_schedules').find(s => s.id == id) || null; },
        async getByDoctorId(did) { return getStorageData('mock_schedules').filter(s => s.doctor_id == did); },
        async getByDoctorAndDay(did, day) { return getStorageData('mock_schedules').find(s => s.doctor_id == did && s.day_of_week === day) || null; },
        async create(data) {
            const list = getStorageData('mock_schedules'); const item = { id: Date.now(), ...data, is_active: true };
            list.push(item); setStorageData('mock_schedules', list); return item;
        },
        async update(id, data) {
            const list = getStorageData('mock_schedules'); const idx = list.findIndex(s => s.id == id);
            if (idx !== -1) { list[idx] = { ...list[idx], ...data }; setStorageData('mock_schedules', list); return list[idx]; }
            return null;
        },
        async delete(id) {
            let list = getStorageData('mock_schedules').filter(s => s.id != id);
            setStorageData('mock_schedules', list); return { success: true };
        },
        async setOffDay(doctorId, dayOfWeek) {
            const list = getStorageData('mock_schedules'); const idx = list.findIndex(s => s.doctor_id == doctorId && s.day_of_week === dayOfWeek);
            if (idx !== -1) { list[idx].is_active = false; setStorageData('mock_schedules', list); return list[idx]; }
            return null;
        }
    },

    // 6. TREATMENTS
    treatments: {
        async getAll() { return getStorageData('mock_treatments'); },
        async getById(id) { return getStorageData('mock_treatments').find(t => t.id == id) || null; },
        async getByCode(code) { return getStorageData('mock_treatments').find(t => t.code === code) || null; },
        async getActive() { return getStorageData('mock_treatments').filter(t => t.is_active); },
        async getByCategory(cat) { return getStorageData('mock_treatments').filter(t => t.category === cat); },
        async create(data) {
            const list = getStorageData('mock_treatments'); const item = { id: Date.now(), ...data, is_active: true };
            list.push(item); setStorageData('mock_treatments', list); return item;
        },
        async update(id, data) {
            const list = getStorageData('mock_treatments'); const idx = list.findIndex(t => t.id == id);
            if (idx !== -1) { list[idx] = { ...list[idx], ...data }; setStorageData('mock_treatments', list); return list[idx]; }
            return null;
        },
        async delete(id) {
            let list = getStorageData('mock_treatments').filter(t => t.id != id);
            setStorageData('mock_treatments', list); return { success: true };
        }
    },

    // 7. TREATMENT PACKAGES
    treatmentPackages: {
        async getAll() { return getStorageData('mock_packages'); },
        async getById(id) { return getStorageData('mock_packages').find(p => p.id == id) || null; },
        async getActive() { return getStorageData('mock_packages').filter(p => p.is_active); },
        async create(data) {
            const list = getStorageData('mock_packages'); const item = { id: Date.now(), ...data, is_active: true };
            list.push(item); setStorageData('mock_packages', list); return item;
        },
        async update(id, data) {
            const list = getStorageData('mock_packages'); const idx = list.findIndex(p => p.id == id);
            if (idx !== -1) { list[idx] = { ...list[idx], ...data }; setStorageData('mock_packages', list); return list[idx]; }
            return null;
        },
        async delete(id) {
            let list = getStorageData('mock_packages').filter(p => p.id != id);
            setStorageData('mock_packages', list); return { success: true };
        }
    },

    // 8. PACKAGE ITEMS
    packageItems: {
        async getAll() { return getStorageData('mock_package_items'); },
        async getByPackageId(pid) { return getStorageData('mock_package_items').filter(i => i.package_id == pid); },
        async create(data) {
            const list = getStorageData('mock_package_items'); const item = { id: Date.now(), ...data };
            list.push(item); setStorageData('mock_package_items', list); return item;
        },
        async delete(id) {
            let list = getStorageData('mock_package_items').filter(i => i.id != id);
            setStorageData('mock_package_items', list); return { success: true };
        }
    },

    // 9. APPOINTMENTS
    appointments: {
        async getAll() { return getStorageData('mock_appointments'); },
        async getById(id) { return getStorageData('mock_appointments').find(a => a.id == id) || null; },
        async getByPatientId(pid) { return getStorageData('mock_appointments').filter(a => a.patient_id == pid); },
        async getByDoctorId(did) { return getStorageData('mock_appointments').filter(a => a.doctor_id == did); },
        async getByDate(date) { return getStorageData('mock_appointments').filter(a => a.appointment_date === date); },
        async getByDateRange(startDate, endDate) {
            return getStorageData('mock_appointments').filter(a => a.appointment_date >= startDate && a.appointment_date <= endDate);
        },
        async getByStatus(status) { return getStorageData('mock_appointments').filter(a => a.status === status); },
        async getToday() {
            const todayStr = new Date().toISOString().split('T')[0];
            return getStorageData('mock_appointments').filter(a => a.appointment_date === todayStr);
        },
        async getUpcoming() {
            const todayStr = new Date().toISOString().split('T')[0];
            return getStorageData('mock_appointments').filter(a => a.appointment_date >= todayStr);
        },
        async create(data) {
            const list = getStorageData('mock_appointments'); const item = { id: Date.now(), ...data, status: 'pending' };
            list.push(item); setStorageData('mock_appointments', list); return item;
        },
        async update(id, data) {
            const list = getStorageData('mock_appointments'); const idx = list.findIndex(a => a.id == id);
            if (idx !== -1) { list[idx] = { ...list[idx], ...data }; setStorageData('mock_appointments', list); return list[idx]; }
            return null;
        },
        async updateStatus(id, status) { return this.update(id, { status }); },
        async cancel(id, reason, cancelledBy) { return this.update(id, { status: 'cancelled', cancellation_reason: reason, cancelled_by: cancelledBy }); },
        async delete(id) {
            let list = getStorageData('mock_appointments').filter(a => a.id != id);
            setStorageData('mock_appointments', list); return { success: true };
        },
        async getAvailableSlots(doctorId, date) {
            return { schedule: { start_time: "08:00", end_time: "16:00" }, existingAppointments: this.getByDate(date) };
        }
    },

    // 10. APPOINTMENT TREATMENTS
    appointmentTreatments: {
        async getAll() { return getStorageData('mock_app_treatments'); },
        async getByAppointmentId(aid) { return getStorageData('mock_app_treatments').filter(t => t.appointment_id == aid); },
        async create(data) {
            const list = getStorageData('mock_app_treatments'); const item = { id: Date.now(), ...data };
            list.push(item); setStorageData('mock_app_treatments', list); return item;
        },
        async createBulk(arr) {
            const list = getStorageData('mock_app_treatments');
            const items = arr.map((x, i) => ({ id: Date.now() + i, ...x }));
            setStorageData('mock_app_treatments', [...list, ...items]); return items;
        },
        async deleteByAppointmentId(aid) {
            let list = getStorageData('mock_app_treatments').filter(t => t.appointment_id != aid);
            setStorageData('mock_app_treatments', list); return { success: true };
        },
        async delete(id) {
            let list = getStorageData('mock_app_treatments').filter(t => t.id != id);
            setStorageData('mock_app_treatments', list); return { success: true };
        }
    },

    // 11. INVOICES
    invoices: {
        async getAll() { return getStorageData('mock_invoices'); },
        async getById(id) { return getStorageData('mock_invoices').find(i => i.id == id) || null; },
        async getByNumber(n) { return getStorageData('mock_invoices').find(i => i.invoice_number === n) || null; },
        async getByAppointmentId(aid) { return getStorageData('mock_invoices').find(i => i.appointment_id == aid) || { id: 0, appointment_id: aid, total_amount: 0, status: 'unpaid' }; },
        async getUnpaid() { return getStorageData('mock_invoices').filter(i => i.status === 'unpaid'); },
        async getByPatientId(pid) { return getStorageData('mock_invoices').filter(i => i.patient_id == pid); },
        async create(data) {
            const list = getStorageData('mock_invoices'); const item = { id: Date.now(), ...data };
            list.push(item); setStorageData('mock_invoices', list); return item;
        },
        async update(id, data) {
            const list = getStorageData('mock_invoices'); const idx = list.findIndex(i => i.id == id);
            if (idx !== -1) { list[idx] = { ...list[idx], ...data }; setStorageData('mock_invoices', list); return list[idx]; }
            return null;
        },
        async updatePaymentStatus(id, status) { return this.update(id, { status }); },
        async delete(id) {
            let list = getStorageData('mock_invoices').filter(i => i.id != id);
            setStorageData('mock_invoices', list); return { success: true };
        }
    },

    // 12. PAYMENTS
    payments: {
        async getAll() { return getStorageData('mock_payments'); },
        async getById(id) { return getStorageData('mock_payments').find(p => p.id == id) || null; },
        async getByInvoiceId(iid) { return getStorageData('mock_payments').filter(p => p.invoice_id == iid); },
        async getByDateRange(startDate, endDate) {
            return getStorageData('mock_payments').filter(p => p.payment_date >= startDate && p.payment_date <= endDate);
        },
        async create(data) {
            const list = getStorageData('mock_payments'); const item = { id: Date.now(), ...data };
            list.push(item); setStorageData('mock_payments', list); return item;
        },
        async delete(id) {
            let list = getStorageData('mock_payments').filter(p => p.id != id);
            setStorageData('mock_payments', list); return { success: true };
        }
    },

    // 13. INVENTORY
    inventory: {
        async getAll() { return getStorageData('mock_inventory'); },
        async getById(id) { return getStorageData('mock_inventory').find(i => i.id == id) || null; },
        async getByCode(c) { return getStorageData('mock_inventory').find(i => i.code === c) || null; },
        async getByCategory(cat) { return getStorageData('mock_inventory').filter(i => i.category === cat); },
        async getLowStock() { return getStorageData('mock_inventory').filter(i => i.stock <= i.min_stock); },
        async getExpiringSoon() { return []; },
        async create(data) {
            const list = getStorageData('mock_inventory'); const item = { id: Date.now(), ...data };
            list.push(item); setStorageData('mock_inventory', list); return item;
        },
        async update(id, data) {
            const list = getStorageData('mock_inventory'); const idx = list.findIndex(i => i.id == id);
            if (idx !== -1) { list[idx] = { ...list[idx], ...data }; setStorageData('mock_inventory', list); return list[idx]; }
            return null;
        },
        async updateStock(id, quantity, transactionType) {
            const list = getStorageData('mock_inventory'); const idx = list.findIndex(i => i.id == id);
            if (idx !== -1) {
                if (transactionType === 'in') list[idx].stock += Number(quantity);
                else list[idx].stock -= Number(quantity);
                setStorageData('mock_inventory', list); return list[idx];
            }
            return null;
        },
        async delete(id) {
            let list = getStorageData('mock_inventory').filter(i => i.id != id);
            setStorageData('mock_inventory', list); return { success: true };
        }
    },

    // 14. INVENTORY TRANSACTIONS
    inventoryTransactions: {
        async getAll() { return getStorageData('mock_inv_transactions'); },
        async getByInventoryId(iid) { return getStorageData('mock_inv_transactions').filter(t => t.inventory_id == iid); },
        async create(data) {
            const list = getStorageData('mock_inv_transactions'); const item = { id: Date.now(), ...data };
            list.push(item); setStorageData('mock_inv_transactions', list); return item;
        }
    },

    // 15. SURVEYS
    surveys: {
        async getAll() { return getStorageData('mock_surveys'); },
        async getById(id) { return getStorageData('mock_surveys').find(s => s.id == id) || null; },
        async getByAppointmentId(aid) { return getStorageData('mock_surveys').find(s => s.appointment_id == aid) || null; },
        async getBadReviews() { return getStorageData('mock_surveys').filter(s => s.rating <= 3); },
        async getAverageRatingByDoctor(doctorId) { return 5; },
        async create(data) {
            const list = getStorageData('mock_surveys'); const item = { id: Date.now(), ...data };
            list.push(item); setStorageData('mock_surveys', list); return item;
        },
        async update(id, data) {
            const list = getStorageData('mock_surveys'); const idx = list.findIndex(s => s.id == id);
            if (idx !== -1) { list[idx] = { ...list[idx], ...data }; setStorageData('mock_surveys', list); return list[idx]; }
            return null;
        },
        async markFollowUpDone(id) { return this.update(id, { follow_up_status: 'done' }); },
        async delete(id) {
            let list = getStorageData('mock_surveys').filter(s => s.id != id);
            setStorageData('mock_surveys', list); return { success: true };
        }
    },

    // 16. LOYALTY POINTS
    loyaltyPoints: {
        async getAll() { return getStorageData('mock_loyalty'); },
        async getByPatientId(pid) { return getStorageData('mock_loyalty').filter(l => l.patient_id == pid); },
        async getTotalPoints(patientId) {
            const filtered = getStorageData('mock_loyalty').filter(l => l.patient_id == patientId);
            return filtered.reduce((acc, curr) => curr.points_type === 'earn' ? acc + curr.points : acc - curr.points, 0);
        },
        async getPatientTier(patientId) {
            const filtered = getStorageData('mock_loyalty').filter(l => l.patient_id == patientId);
            const earnPoints = filtered.reduce((acc, curr) => curr.points_type === 'earn' ? acc + curr.points : acc, 0);
            if (earnPoints >= 500) return "Platinum Member";
            if (earnPoints >= 250) return "Gold Member";
            if (earnPoints >= 100) return "Silver Member";
            return "Bronze Member";
        },
        async addPoints(patientId, points, source) {
            const list = getStorageData('mock_loyalty');
            const item = { id: Date.now(), patient_id: patientId, points, points_type: 'earn', source_activity: source, created_at: new Date().toISOString() };
            list.push(item); setStorageData('mock_loyalty', list); return item;
        },
        async deductPoints(patientId, points, rewardId) {
            const list = getStorageData('mock_loyalty');
            const item = { id: Date.now(), patient_id: patientId, points, points_type: 'redeem', reward_id: rewardId, created_at: new Date().toISOString() };
            list.push(item); setStorageData('mock_loyalty', list); return item;
        }
    },

    // 17. REWARDS
    rewards: {
        async getAll() { return getStorageData('mock_rewards'); },
        async getActive() { return getStorageData('mock_rewards').filter(r => r.is_active); },
        async getById(id) { return getStorageData('mock_rewards').find(r => r.id == id) || null; },
        async getAffordableRewards(patientId) { return getStorageData('mock_rewards').filter(r => r.is_active); },
        async create(data) {
            const list = getStorageData('mock_rewards'); const item = { id: Date.now(), ...data, is_active: true };
            list.push(item); setStorageData('mock_rewards', list); return item;
        },
        async update(id, data) {
            const list = getStorageData('mock_rewards'); const idx = list.findIndex(r => r.id == id);
            if (idx !== -1) { list[idx] = { ...list[idx], ...data }; setStorageData('mock_rewards', list); return list[idx]; }
            return null;
        },
        async reduceStock(id) {
            const list = getStorageData('mock_rewards'); const idx = list.findIndex(r => r.id == id);
            if (idx !== -1 && list[idx].stock > 0) { list[idx].stock -= 1; setStorageData('mock_rewards', list); return list[idx]; }
            return null;
        },
        async delete(id) {
            let list = getStorageData('mock_rewards').filter(r => r.id != id);
            setStorageData('mock_rewards', list); return { success: true };
        }
    },

    // 18. REWARD REDEMPTIONS
    rewardRedemptions: {
        async getAll() { return getStorageData('mock_redemptions'); },
        async getByPatientId(pid) { return getStorageData('mock_redemptions').filter(r => r.patient_id == pid); },
        async redeem(patientId, rewardId) {
            const list = getStorageData('mock_redemptions');
            const item = { id: Date.now(), patient_id: patientId, reward_id: rewardId, status: 'pending', created_at: new Date().toISOString() };
            list.push(item); setStorageData('mock_redemptions', list); return item;
        }
    },

    // 19. PROMOTIONS
    promotions: {
        async getAll() { return getStorageData('mock_promotions'); },
        async getActive() { return getStorageData('mock_promotions').filter(p => p.is_active); },
        async getByCouponCode(c) { return getStorageData('mock_promotions').find(p => p.coupon_code === c) || null; },
        async validateCoupon(code) {
            const promo = getStorageData('mock_promotions').find(p => p.coupon_code === code && p.is_active);
            return promo ? { valid: true, promotion: promo } : { valid: false };
        },
        async create(data) {
            const list = getStorageData('mock_promotions'); const item = { id: Date.now(), ...data, is_active: true };
            list.push(item); setStorageData('mock_promotions', list); return item;
        },
        async update(id, data) {
            const list = getStorageData('mock_promotions'); const idx = list.findIndex(p => p.id == id);
            if (idx !== -1) { list[idx] = { ...list[idx], ...data }; setStorageData('mock_promotions', list); return list[idx]; }
            return null;
        },
        async delete(id) {
            let list = getStorageData('mock_promotions').filter(p => p.id != id);
            setStorageData('mock_promotions', list); return { success: true };
        }
    },

    // 20. COMMUNICATION LOGS
    communicationLogs: {
        async getAll() { return getStorageData('mock_comm_logs'); },
        async getByPatientId(pid) { return getStorageData('mock_comm_logs').filter(c => c.patient_id == pid); },
        async getByChannel(channel) { return getStorageData('mock_comm_logs').filter(c => c.channel === channel); },
        async logOutgoing(patientId, channel, messageType, status, content) {
            const list = getStorageData('mock_comm_logs');
            const item = { id: Date.now(), patient_id: patientId, channel, message_type: messageType, direction: 'outgoing', status, content, created_at: new Date().toISOString() };
            list.push(item); setStorageData('mock_comm_logs', list); return item;
        },
        async logIncoming(patientId, channel, messageType, content) {
            const list = getStorageData('mock_comm_logs');
            const item = { id: Date.now(), patient_id: patientId, channel, message_type: messageType, direction: 'incoming', status: 'received', content, created_at: new Date().toISOString() };
            list.push(item); setStorageData('mock_comm_logs', list); return item;
        }
    },

    // 21. ACTIVITY LOGS
    activityLogs: {
        async getAll() { return getStorageData('mock_logs'); },
        async getByUserId(userId) { return getStorageData('mock_logs').filter(l => l.user_id == userId); },
        async getByAction(action) { return getStorageData('mock_logs').filter(l => l.action === action); },
        async getByDateRange(startDate, endDate) {
            return getStorageData('mock_logs').filter(l => l.created_at >= startDate && l.created_at <= endDate);
        },
        async log(userId, action, tableName, recordId, oldData = null, newData = null, ipAddress = null) {
            const logs = getStorageData('mock_logs');
            const item = { id: Date.now(), user_id: userId, action, table_name: tableName, record_id: recordId, old_data: oldData, new_data: newData, ip_address: ipAddress, created_at: new Date().toISOString() };
            logs.push(item); setStorageData('mock_logs', logs); return item;
        }
    }
};

export default dentalAPI;